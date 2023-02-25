/* eslint-disable @typescript-eslint/no-unused-vars */

// ! 本頁程式碼已棄用
// ! NUXT3 不支援此寫法，APIs Request 請參照 @/pages/index.vue

import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

export default class APIService {
  axios: AxiosInstance;
  baseURL: string;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.axios = axios.create({
      baseURL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // this.init();
  }

  // init() {
  //   // request interceptor
  //   this.axios.interceptors.request.use(
  //     // @ts-ignore
  //     (config: any): Promise<AxiosRequestConfig<unknown>> => {
  //       const token = localStorage.getItem('_at');
  //       if (config?.headers) {
  //         config.headers['Access-Control-Allow-Origin'] = '*';
  //         if (token) {
  //           config.headers.Authorization = `Bearer ${token}`;
  //         }
  //       }
  //       return config;
  //     },
  //     (error) => {
  //       console.error('error:', error); // for debug
  //       Promise.reject(error);
  //     }
  //   );
  //   // response interceptor
  //   this.axios.interceptors.response.use(
  //     response => response,
  //     async(error: AxiosError) => {
  //       const at = localStorage.getItem('_at');
  //       const rt = localStorage.getItem('_rt');
  //       if (error.response && error.response.status === 401 && at && rt) {
  //         try {
  //           const res = await fetch(`${this.baseURL}/auth/refresh-token`, {
  //             method: 'post',
  //             body: JSON.stringify({
  //               access_token: localStorage.getItem('_at'),
  //               refresh_token: localStorage.getItem('_rt')
  //             }),
  //             headers: new Headers({
  //               authorization: `Bearer ${localStorage.getItem('_rt')}`
  //             })
  //           });

  //           const { access_token, refresh_token } = await res.json();

  //           localStorage.setItem('_at', access_token);
  //           localStorage.setItem('_rt', refresh_token);

  //           // Retry previous request after refreshToken

  //           if (!error.config || !access_token) return;

  //           if (error.config?.headers) {
  //             error.config.headers.Authorization = `Bearer ${access_token}`;
  //           }
  //           // console.log(error.config);
  //           return axios(error.config);
  //         } catch (err) {
  //           localStorage.removeItem('_at');
  //           localStorage.removeItem('_rt');
  //           return Promise.reject(error);
  //         }
  //       }
  //       return Promise.reject(error);
  //     }
  //   );
  // }
}
