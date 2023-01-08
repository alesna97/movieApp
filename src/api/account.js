import {ACCESS_TOKEN} from '../config';
import baseApi from './baseApi';

const path = '/account';

export const getMovieRecommendationApi = accountId =>
  baseApi.get(`${path}/${accountId}/movie/recommendations`, {
    headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
  });
