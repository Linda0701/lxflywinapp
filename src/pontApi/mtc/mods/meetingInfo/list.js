/**
 * @desc 会议分页
 */
import axios from '@/utils/request';

export function request(params = {}, bodyParams = {}) {
  return axios({
    method: 'GET',
    url: '/mtc/meeting-info/page',
    params,
  });
}
