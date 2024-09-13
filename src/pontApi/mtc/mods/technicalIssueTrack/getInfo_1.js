/**
 * @desc 详情
 */
import axios from '@/utils/request';

export function request(params = {}, bodyParams = {}) {
  return axios({
    method: 'GET',
    url: '/mtc/technical-issue-track/{id}',
    params,
  });
}
