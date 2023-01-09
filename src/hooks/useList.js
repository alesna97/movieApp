import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {getListApi} from '../api/account';
import {setFetchList, setList} from '../store/slice/listSlice';

const useList = () => {
  const dispatch = useDispatch();
  const {list} = useSelector(state => state.list);

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

  return {
    fetchList,
    list,
  };
};

export default useList;
