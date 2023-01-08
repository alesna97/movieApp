import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accountId: null,
    isFetchRequestToken: false,
  },
  reducers: {
    fetchRequestToken: (state, action) => {
      state.isFetchRequestToken = action.payload;
    },
  },
});

export const {fetchRequestToken} = authSlice.actions;
