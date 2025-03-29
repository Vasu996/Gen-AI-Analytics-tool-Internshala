import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery } from '../store/querySlice';

const QueryHistory = () => {
  const { queryHistory } = useSelector((state) => state.query);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Queries</h3>
      {queryHistory.length === 0 ? (
        <p className="text-gray-500 italic">No recent queries yet</p>
      ) : (
        <ul className="space-y-3">
          {queryHistory.map((query, index) => (
            <li
              key={index}
              onClick={() => dispatch(setQuery(query))}
              className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 text-gray-700"
            >
              {query}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QueryHistory;