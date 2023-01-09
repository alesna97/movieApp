import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTvRecommendationApi} from '../api/account';
import {fetchRecommendation, setRecommendation} from '../store/slice/tvSlice';

const useTv = () => {
  const dispatch = useDispatch();
  const {recommendation} = useSelector(state => state.tv);

  const fetchRecommendationTv = useCallback(async () => {
    try {
      dispatch(fetchRecommendation(true));
      const accountId = await AsyncStorage.getItem('accountId');
      const result = await getTvRecommendationApi(accountId);

      if (result) {
        dispatch(fetchRecommendation(false));
        dispatch(setRecommendation(result.data));
      }
    } catch (error) {
      dispatch(fetchRecommendation(false));
    }
  }, []);

  return {
    recommendation: {
      fetch: fetchRecommendationTv,
      ...recommendation,
    },
  };
};

export default useTv;
