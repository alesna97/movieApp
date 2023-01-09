import {createSlice} from '@reduxjs/toolkit';

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    list: [],
    isFetchList: false,
    isCreateList: false,
    isDeleteList: false,
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setFetchList: (state, action) => {
      state.isFetchList = action.payload;
    },
    setCreateFetchList: (state, action) => {
      state.isCreateList = action.payload;
    },
    setDeleteList: (state, action) => {
      state.isDeleteList = action.payload;
    },
  },
});

export const {setCreateFetchList, setDeleteList, setFetchList, setList} =
  listSlice.actions;
