/**
 * @desc 详情
 */
import axios from '@/utils/request';

export function request(params = {}, bodyParams = {}) {
  return axios({
    method: 'GET',
    url: '/mtc/meeting-info/{id}',
    params,
  });
}
