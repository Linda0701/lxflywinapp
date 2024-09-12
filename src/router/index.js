import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';


const routes = [
    {
        path: '',
        name: 'App',
        component: App,
        children: [],
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