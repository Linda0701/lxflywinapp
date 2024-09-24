/* eslint-disable */
import request from '@/utils/request'

// 分页
export function getPage(data) {
    return request({
        url: '/technical-issue-track/page',
        method: 'get',
        params: data
    })
}

// 问题状态查询
export function getStatic(data) {
    return request({
        url: '/technical-issue-track/statistic',
        method: 'get',
        params: data
    })
}

// Top10 ata
export function getTop10Ata(data) {
    return request({
        url: '/technical-issue-track/top10Ata',
        method: 'get',
        params: data
    })
}

// Top10 技术问题
export function getTop10(data) {
    return request({
        url: '/technical-issue-track/top10',
        method: 'get',
        params: data
    })
}

// 详情
export function getDetails(id) {
    return request({
        url: '/technical-issue-track/' + id,
        method: 'get',
    })
}