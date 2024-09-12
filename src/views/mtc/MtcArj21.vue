<template>
    <div>
        <div class="question_follow">技术问题跟踪</div>
        <van-row class="desc_title">
            <van-col span="8">
                <div class="desc_title">111</div>
                <div class="desc_title">进行中</div>
            </van-col>
            <van-col span="8">
                <div class="desc_title">222</div>
                <div class="desc_title">持续跟进</div>
            </van-col>
            <van-col span="8">
                <div class="desc_title">222</div>
                <div class="desc_title">已关闭</div>
            </van-col>
        </van-row>
        <div ref="chart" style="width: 200px; height: 400px;"></div>
        <div>TOP10技术问题</div>
    </div>
</template>

<script>

export default {
    name: 'MtcArj21',
    data() {
        return {
            list: [],
        }
    },
    mounted() {
        this.initChart();
    },
    methods: {
        getTop10() {
            
        },
        initChart() {
            const chart = this.$echarts.init(this.$refs.chart);
            chart.setOption({
                title: {
                    text: '技术问题涉及ATA章节'
                },
                tooltip: {},
                xAxis: {
                    data: ['A', 'B', 'C', 'D', 'E']
                },
                yAxis: {},
                series: [{
                    name: '数据',
                    type: 'bar',
                    data: [0, 5, 10, 20, 30]
                }]
            });
        }
    }
}
</script>

<style>
.question_follow {
    text-align: left;
    padding-left: 20px;
}

.desc_title {
    display: flex;
    padding-left: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
}
</style>