import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444'];

const ResultsDisplay = () => {
  const { results, isLoading, error } = useSelector((state) => state.query);
  const [chartType, setChartType] = useState('line');

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-6 bg-red-50 rounded-lg">
        {error}
      </div>
    );
  }

  if (!results) {
    return (
      <div className="text-gray-500 text-center p-6 bg-gray-50 rounded-lg">
        Ask a question to see insights!
      </div>
    );
  }

  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return (
          <LineChart width={700} height={400} data={results.trendData} className="mx-auto">
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip contentStyle={{ borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} />
            <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        );
      case 'bar':
        return (
          <BarChart width={700} height={400} data={results.barData} className="mx-auto">
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip contentStyle={{ borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
            <Legend />
            <Bar dataKey="sales" fill="#6366f1" radius={[4, 4, 0, 0]} />
          </BarChart>
        );
      case 'pie':
        return (
          <PieChart width={700} height={400} className="mx-auto">
            <Pie
              data={results.categoryData}
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
              labelLine={false}
            >
              {results.categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
            <Legend />
          </PieChart>
        );
      default:
        return null;
    }
  };

  return (
    <div className="card">
      <div className="flex justify-center gap-3 mb-6">
        {['line', 'bar', 'pie'].map((type) => (
          <button
            key={type}
            onClick={() => setChartType(type)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              chartType === type
                ? 'bg-indigo-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {type === 'line' ? 'Trend' : type === 'bar' ? 'Comparison' : 'Distribution'}
          </button>
        ))}
      </div>
      {renderChart()}
    </div>
  );
};

export default ResultsDisplay;