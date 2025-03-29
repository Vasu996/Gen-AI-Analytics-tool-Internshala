import { createSlice } from '@reduxjs/toolkit';

const querySlice = createSlice({
  name: 'query',
  initialState: {
    currentQuery: '',
    queryHistory: [],
    results: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.currentQuery = action.payload;
    },
    addToHistory(state, action) {
      state.queryHistory.unshift(action.payload);
      state.queryHistory = state.queryHistory.slice(0, 5);
    },
    setResults(state, action) {
      state.results = action.payload;
      state.isLoading = false;
    },
    setLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setQuery, addToHistory, setResults, setLoading, setError } = querySlice.actions;
export default querySlice.reducer;