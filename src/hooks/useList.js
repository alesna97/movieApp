import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {getListApi} from '../api/account';
import {createListApi} from '../api/lists';
import {
  setCreateFetchList,
  setFetchList,
  setList,
} from '../store/slice/listSlice';

const useList = () => {
  const dispatch = useDispatch();
  const {list, isCreateList} = useSelector(state => state.list);

  const fetchList = async () => {
    try {
      dispatch(setFetchList(true));
      const accountId = await AsyncStorage.getItem('accountId');
      const result = await getListApi(accountId);

      if (result) {
        dispatch(setFetchList(false));
        dispatch(setList(result.data.results));
      }
    } catch (error) {
      dispatch(setFetchList(false));
    }
  };

  const createList = async params => {
    try {
      dispatch(setCreateFetchList(true));
      const accessToken = await AsyncStorage.getItem('accessToken');
      const result = await createListApi(accessToken, params);

      if (result) {
        dispatch(setCreateFetchList(false));
        console.log(result);
      }
    } catch (error) {
      dispatch(setCreateFetchList(false));
    }
  };

  return {
    fetchList,
    list,
    createList,
    isCreateList,
  };
};

export default useList;
