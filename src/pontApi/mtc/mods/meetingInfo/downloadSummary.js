/**
 * @desc 会议附件
 */
import axios from '@/utils/request';

export function request(params = {}, bodyParams = {}) {
  return axios({
    method: 'GET',
    url: '/mtc/meeting-info/download/summary/{id}',
    params,
  });
}
