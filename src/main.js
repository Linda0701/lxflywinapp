import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // 引入路由
import Vant from 'vant';
import 'vant/lib/index.css';
import * as echarts from 'echarts';

const app = createApp(App);

app.use(Vant);

app.use(router);

// 全局注册 ECharts
app.config.globalProperties.$echarts = echarts;

app.mount('#app');