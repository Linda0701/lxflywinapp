/**
 * @desc 刷新token
 */
import axios from '@/utils/request';

export function request(params = {}, bodyParams = {}) {
  return axios({
    method: 'GET',
    url: '/mtc/token/refresh/{jobNum}',
    params,
  });
}
