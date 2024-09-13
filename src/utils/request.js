// @/utils/request.js

import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // 使用相对路径，匹配代理的前缀
  timeout: 5000,
});

instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，例如添加 token
    return config;
  },
  error => {
    // 请求错误处理
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response.data;
  },
  error => {
    // 响应错误处理
    return Promise.reject(error);
  }
);

export default function request(config) {
  return instance(config);
}