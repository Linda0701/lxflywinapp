import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/mtc/index.vue'),
        meta: {
            title: '首页',
            showRight: true
        },
    },
    {
        path: '/trackTech',
        name: 'trackTech',
        component: () => import('@/views/mtc/trackTech.vue'),
        meta: {
            title: '技术问题跟踪',
            showRight: true
        },
    },
    {
        path: '/trackDetail',
        name: 'trackDetail',
        component: () => import('@/views/mtc/trackDetail.vue'),
        meta: {
            title: '技术问题详情',
            showRight: true
        },
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;