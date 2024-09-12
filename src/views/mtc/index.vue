<template>
  <div class="backlog_wrapper">
    <van-tabs v-model:active="active">
      <van-tab title="ARJ21" name="ARJ21">
        <mtc-arj21 name="my_exam"></mtc-arj21>
      </van-tab>
      <van-tab title="C919" name="C919">
        <mtc-c919 name="my_exam"></mtc-c919>
      </van-tab>
    </van-tabs>

    <!-- <div ref="chart" style="width: 600px; height: 400px;"></div> -->
  </div>
</template>

<script>
import MtcArj21 from "./MtcArj21.vue";
import MtcC919 from "./MtcC919.vue";

export default {
  name: 'FlywinMtc',
  components: {MtcArj21,MtcC919},
  mounted() {
    // this.initChart();
  },
  methods: {
    initChart() {
      const chart = this.$echarts.init(this.$refs.chart);
      chart.setOption({
        title: {
          text: '示例图表'
        },
        tooltip: {},
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [{
          name: '数据',
          type: 'bar',
          data: [5, 20, 36, 10, 10]
        }]
      });
    }
  }
}
</script>

<style scoped>


.backlog_wrapper {
  position: relative;
}
</style>