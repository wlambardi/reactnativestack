import axios from 'axios';
import ENDPOINTS from './endpoints';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const apiInstance = axios.create({
  baseURL: BASE_URL,
});


export const getNews = () =>
  apiInstance
    .request({
      url: 'https://newsapi.org/v2/top-headlines?apiKey=d0cdeea4281146deb024ff3097f884c8',
      method: 'GET',
      params: { pageSize: 100, country: 'us' },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return Promise.reject(error.message);
    });

export const getPosts = () =>
  apiInstance
    .request({
      url: ENDPOINTS.POSTS,
      method: 'GET',
      //params: { timestamp: Date.now() },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return Promise.reject(error.message);
    });


export const getComments = id =>
  apiInstance
    .request({
      url: ENDPOINTS.COMMENTS,
      method: 'GET',
      params: { postId: id },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return Promise.reject(error.message);
    });

export const getAlbums = () =>
  apiInstance
    .request({
      url: ENDPOINTS.ALBUMS,
      method: 'GET',
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return Promise.reject(error.message);
    });

export const getPhotos = id =>
  apiInstance
    .request({
      url: ENDPOINTS.PHOTOS,
      method: 'GET',
      params: { timestamp: Date.now(), albumId: id },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return Promise.reject(error.message);
    });