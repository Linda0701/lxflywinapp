<template>
    <div>
        <h1>C919</h1>
        <div ref="chart" style="width: 200px; height: 400px;"></div>
    </div>
</template>

<script>

export default {
    name: 'MtcArj21',
    mounted() {
        this.initChart();
    },
    methods: {
        initChart() {
            const chart = this.$echarts.init(this.$refs.chart);
            chart.setOption({
                title: {
                    text: '示例图表1111'
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