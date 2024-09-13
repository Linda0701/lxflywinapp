<template>
  <div id="app">
    <van-nav-bar title="MTC管理页面" left-text="返回" left-arrow bind:click-left="onClickLeft" />
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
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
}
</script>

<style>
#app {
  font-family: PingFang SC;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  z-index: -20;
  background-color: #132355;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  font-size: 16px
}
</style>
