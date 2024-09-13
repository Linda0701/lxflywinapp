import request from '@/utils/request'

// 分页
export function getPage (data) {
    return request({
        url: '/technical-issue-track/page',
        method: 'get',
        params: data
    })
}

// 问题状态查询
export function getStatic (data) {
    return request({
        url: '/technical-issue-track/statistic',
        method: 'get',
        params: data
    })
}

// 前10
export function getTop10 (data) {
    return request({
        url: '/technical-issue-track/top10',
        method: 'get',
        params: data
    })
}
