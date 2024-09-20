import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';


const routes = [
    {
        path: '',
        name: 'App',
        component: App,
        children: [
            {
                path: '/trackTech',
                name: 'trackTech',
                component: () => import('@/views/mtc/trackTech.vue'),
                meta: {
                    showRight: true
                }
            }
        ],
        meta: {
            title: '登录中...',
            showRight: true
        }
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;