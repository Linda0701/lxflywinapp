/**
 * @desc undefined
 */
import axios from '@/utils/request';

export function request(params = {}, bodyParams = {}) {
  return axios({
    method: 'GET',
    url: '/technical-issue-track/statistic',
    params,
  });
}
