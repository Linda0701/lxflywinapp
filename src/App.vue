<template>
  <div id="app">
    <van-sticky>
      <van-nav-bar title="MTC管理页面" left-text="返回" left-arrow bind:click-left="onClickLeft" />
    </van-sticky>
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
  /* background-image: url('assets/wholebg.png'); */
  background-color: #04102A;
  background-image:
    url('./assets/light.png'),
    url('./assets/diefang.png'),
    radial-gradient(ellipse at top, #183799 20%, #061A4B 100%, #040F27 100%);
  background-size: contain, contain, cover;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top, center right, center;
  font-family: PingFang SC;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  z-index: -1000;
  width: 100vw;
  height: 100vh;
  /* position: relative; */
  overflow-y: scroll;
  font-size: 16px;
}

.fixed-header {
  position: fixed;
  /* 固定在页面顶部 */
  top: 0;
  left: 0;
  right: 0;
  /* z-index: 1000; */
  background-color: #fff;
  /* 设置背景颜色，避免透明 */
  color: #000;
  /* 设置文字颜色，与背景对比 */
  height: 50px;
  /* 设置固定的高度 */
  line-height: 50px;
  /* 使文字垂直居中 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* 添加阴影，提升可见性 */
}
</style>
