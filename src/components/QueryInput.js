import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, addToHistory, setLoading, setResults, setError } from '../store/querySlice';

const QueryInput = () => {
  const dispatch = useDispatch();
  const { currentQuery } = useSelector((state) => state.query);
  const [suggestions] = useState([
    'What are our top selling products?',
    'Show revenue trends by quarter',
    'Which regions have highest growth?',
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentQuery.trim()) return;

    dispatch(setLoading());
    dispatch(addToHistory(currentQuery));

    try {
      setTimeout(() => {
        const mockData = {
          trendData: [
            { name: 'Q1', revenue: 120, profit: 45 },
            { name: 'Q2', revenue: 150, profit: 55 },
            { name: 'Q3', revenue: 180, profit: 65 },
            { name: 'Q4', revenue: 200, profit: 75 },
          ],
          categoryData: [
            { name: 'Electronics', value: 35 },
            { name: 'Clothing', value: 25 },
            { name: 'Books', value: 20 },
            { name: 'Home', value: 20 },
          ],
          barData: [
            { name: 'North', sales: 400 },
            { name: 'South', sales: 300 },
            { name: 'East', sales: 250 },
            { name: 'West', sales: 200 },
          ],
        };
        dispatch(setResults(mockData));
      }, 1000);
    } catch (error) {
      dispatch(setError('Failed to process query'));
    }
  };

  return (
    <div className="w-full max-w-3xl card">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={currentQuery}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          placeholder="Ask a business question..."
          className="w-full p-4 pr-32 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 bg-gray-50 text-gray-800 placeholder-gray-400"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-md hover:from-indigo-600 hover:to-blue-600 transition-all duration-200 shadow-md"
        >
          Ask AI
        </button>
      </form>
      <div className="mt-4 flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => dispatch(setQuery(suggestion))}
            className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full hover:bg-indigo-100 transition-all duration-200"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QueryInput;