import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios';
import { toast } from 'react-toastify';

import { AppRoute, BASE_URL, REQUEST_TIMEOUT } from '../const';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
import { router } from '..';

export function createApi(): AxiosInstance {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === StatusCodes.NOT_FOUND) {
        router.navigate(AppRoute.NotFound);
      }

      if (error.response?.status !== 401) {
        toast.error(error.message, { theme: 'dark' });
      }

      throw error;
    },
  );

  return api;
}
