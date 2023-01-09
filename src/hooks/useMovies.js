import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieRecommendationApi} from '../api/account';
import {
  fetchRecommendation,
  setRecommendation,
} from '../store/slice/movieSlice';

const useMovies = () => {
  const dispatch = useDispatch();
  const {recommendation} = useSelector(state => state.movie);

  const fetchRecommendationMovie = useCallback(
    async (page = Math.ceil(Math.random(3) + 1)) => {
      try {
        dispatch(fetchRecommendation(true));
        const accountId = await AsyncStorage.getItem('accountId');
        const result = await getMovieRecommendationApi(accountId, {page});

        if (result) {
          dispatch(fetchRecommendation(false));
          dispatch(setRecommendation(result.data));
        }
      } catch (error) {
        dispatch(fetchRecommendation(false));
      }
    },
    [],
  );

  return {
    recommendation: {
      fetch: fetchRecommendationMovie,
      ...recommendation,
    },
  };
};

export default useMovies;
