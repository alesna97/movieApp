import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './slice/authSlice';
import {listSlice} from './slice/listSlice';
import {movieSlice} from './slice/movieSlice';
import {tvSlice} from './slice/tvSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    movie: movieSlice.reducer,
    tv: tvSlice.reducer,
    list: listSlice.reducer,
  },
});

export default store;
