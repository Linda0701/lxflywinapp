<template>
  <div id="app">
    <van-sticky>
      <van-nav-bar title="MTC管理页面" left-text="返回" left-arrow @click-left="onClickLeft" />
    </van-sticky>
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  methods: {
    onClickLeft() {
        console.log(window.history.length); 

        if (window.history.length > 1) {
          this.$router.go(-1);  
        } else {
          this.$router.push('/');
      }
    }
  }
}
</script>

<style>
#app {
  background-image: url('assets/wholeBG.png');
  background-size: 100% 30%;
  background-repeat: no-repeat;
  background-color: #08163a;
  font-family: PingFang SC;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  z-index: -20;
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
