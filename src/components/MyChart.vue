<template>
    <div ref="chart" style="width: 600px; height: 400px;"></div>
  </template>
  
  <script>
  export default {
    mounted() {
      this.initChart();
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
  };
  </script>