/**
 * @desc 登录生成token
 */
import axios from '@/utils/request';

export function request(params = {}, bodyParams = {}) {
  return axios({
    method: 'GET',
    url: '/mtc/token/gen/{jobNum}',
    params,
  });
}
