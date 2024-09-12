<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <router-view></router-view> -->
    <FlywinMtc></FlywinMtc>
    <!-- <router-link to="/subpage">跳转到子页面</router-link> -->
    <!-- <my-vant-button /> -->
    <!-- <my-chart /> -->
  </div>
</template>

<script>
import FlywinMtc from './views/mtc/index.vue';
// import MyVantButton from './components/MyVantButton.vue';
// import MyChart from './components/MyChart.vue';

export default {
  name: 'App',
  components: {
    FlywinMtc
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
