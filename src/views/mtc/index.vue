<template>
  <div class="backlog_wrapper">
    <van-tabs v-model:active="active" color="#24D5E5" background="#132355" title-active-color="#24D5E5">
      <van-tab title="ARJ21" name="ARJ21">
        <mtc-info v-if="active === 'ARJ21'" :aircraft-type="1"></mtc-info>
      </van-tab>
      <van-tab title="C919" name="C919">
        <mtc-info v-if="active === 'C919'" :aircraft-type="0"></mtc-info>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import MtcInfo from "./MtcInfo.vue";

export default {
  name: 'FlywinMtc',
  components: { MtcInfo },
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