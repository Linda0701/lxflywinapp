/**
 * @desc 技术问题统计
 */
import axios from '@/utils/request';

export function request(params = {}, bodyParams = {}) {
  return axios({
    method: 'GET',
    url: '/mtc/technical-issue-track/statistic',
    params,
  });
}
