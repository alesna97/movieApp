import {createSlice} from '@reduxjs/toolkit';

export const tvSlice = createSlice({
  name: 'tv',
  initialState: {
    recommendation: {
      isFetching: false,
      results: [],
      page: 1,
      total_pages: 0,
    },
  },
  reducers: {
    fetchRecommendation: (state, action) => {
      state.recommendation.isFetching = action.payload;
    },
    setRecommendation: (state, action) => {
      state.recommendation.isFetching = false;
      state.recommendation.results = action.payload.results;
      state.recommendation.page = action.payload.page;
      state.recommendation.total_pages = action.payload.total_pages;
    },
  },
});

export const {fetchRecommendation, setRecommendation} = tvSlice.actions;
