import request from '@/utils/request'

// 会议信息
export function getMeetingInfo (data) {
    return request({
        url: '/meeting-info/page',
        method: 'get',
        params: data
    })
}