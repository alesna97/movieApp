import {ACCESS_TOKEN} from '../config';
import baseApi from './baseApi';

const path = '/account';

export const getMovieRecommendationApi = (accountId, params) =>
  baseApi.get(`${path}/${accountId}/movie/recommendations`, {
    headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
    params,
  });

export const getTvRecommendationApi = (accountId, params) =>
  baseApi.get(`${path}/${accountId}/tv/recommendations`, {
    headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
    params,
  });

export const getListApi = (accountId, params) =>
  baseApi.get(`${path}/${accountId}/lists`, {
    headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
    params,
  });
