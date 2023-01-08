import {ACCESS_TOKEN} from '../config';
import baseApi from './baseApi';

const path = '/auth';

export const createRequestTokenApi = () =>
  baseApi.post(
    `${path}/request_token`,
    {
      redirect_to: 'movieapp://app/home',
    },
    {
      headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
    },
  );

export const createAccessTokenApi = requestToken =>
  baseApi.post(
    `${path}/access_token`,
    {
      request_token: requestToken,
    },
    {
      headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
    },
  );
