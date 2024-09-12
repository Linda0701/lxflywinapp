<template>
    <van-button type="primary">点击我</van-button>
  </template>
  
  <script>
  import { Button } from 'vant';
  
  export default {
    components: {
      [Button.name]: Button
    }
  };
  </script>