<template>
  <div class="backlog_wrapper">
    <van-tabs v-model:active="active" color="#24D5E5" background="#132355" title-active-color="#24D5E5">
      <van-tab title="ARJ21" name="ARJ21">
        <mtc-arj21 v-if="active === 'ARJ21'" name="ARJ21"></mtc-arj21>
      </van-tab>
      <van-tab title="C919" name="C919">
        <mtc-c919 v-if="active === 'C919'" name="C919"></mtc-c919>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import MtcArj21 from "./MtcArj21.vue";
import MtcC919 from "./MtcC919.vue";

export default {
  name: 'FlywinMtc',
  components: { MtcArj21, MtcC919 },
  mounted() {

  },
  data() {
    return {
      active: 'ARJ21'
    }
  },

}
</script>

<style scoped>
.backlog_wrapper {
  position: sticky;
}

.mtc-arj21,
.mtc-c919 {
  background-color: #132355;
  color: #24D5E5;
}
</style>