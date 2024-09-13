import request from '@/utils/request'
// 查询问题收集列表
export default function getStatic (data) {
    return request({
        url: '/technical-issue-track/statistic',
        method: 'get',
        params: data
    })
}