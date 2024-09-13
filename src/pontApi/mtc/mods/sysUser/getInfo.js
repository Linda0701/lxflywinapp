/**
 * @desc 用户信息
 */
import axios from '@/utils/request';

export function request(params = {}, bodyParams = {}) {
  return axios({
    method: 'GET',
    url: '/mtc/user/getInfo',
    params,
  });
}
