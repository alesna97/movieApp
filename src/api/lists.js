import {ACCESS_TOKEN} from '../config';
import baseApi from './baseApi';

const path = '/list';

export const getListDetailApi = listId =>
  baseApi.get(`${path}/${listId}`, {
    headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
  });

export const createListApi = (accessToken, data) =>
  baseApi.post(`${path}`, data, {
    headers: {Authorization: `Bearer ${accessToken}`},
  });

export const addListItemApi = (accessToken, listId, data) =>
  baseApi.post(`${path}/${listId}/items`, data, {
    headers: {Authorization: `Bearer ${accessToken}`},
  });

export const deleteListItemApi = (accessToken, listId, data) =>
  baseApi.delete(`${path}/${listId}/items`, data, {
    headers: {Authorization: `Bearer ${accessToken}`},
  });

export const checkListItemApi = (accessToken, listId, mediaId, mediaType) =>
  baseApi.get(`${path}/${listId}/item_status`, {
    headers: {Authorization: `Bearer ${accessToken}`},
    params: {media_id: mediaId, media_type: mediaType},
  });
