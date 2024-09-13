/**
 * @desc 用户路由
 */
import axios from '@/utils/request';

export function request(params = {}, bodyParams = {}) {
  return axios({
    method: 'GET',
    url: '/mtc/user/getRouters',
    params,
  });
}
