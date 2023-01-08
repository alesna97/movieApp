import axios from 'axios';
import {TMDB_API} from '../config';

const baseApi = axios.create({
  baseURL: TMDB_API,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

export default baseApi;
