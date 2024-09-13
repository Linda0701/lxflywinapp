/**
 * @desc 技术问题Top10
 */
import axios from '@/utils/request';

export function request(params = {}, bodyParams = {}) {
  return axios({
    method: 'GET',
    url: '/mtc/technical-issue-track/top10',
    params,
  });
}
