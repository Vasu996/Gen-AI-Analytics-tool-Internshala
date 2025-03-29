import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import QueryInput from './components/QueryInput';
import QueryHistory from './components/QueryHistory';
import ResultsDisplay from './components/ResultsDisplay';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 bg-clip-text">
            Gen AI Analytics Dashboard
          </h1>
          
          <div className="space-y-10">
            <QueryInput />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <QueryHistory />
              </div>
              <div className="md:col-span-2">
                <ResultsDisplay />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;