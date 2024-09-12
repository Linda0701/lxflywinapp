<template>
    <div>
        <div class="question_follow">
            <div class="cardname">技术问题跟踪</div>
            <div class="jianba"></div>
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
        </div>
        <div class="ATAchaption">
            <div class="cardname">技术问题涉及ATA章节</div>
            <div ref="chart" style="width: 80vw; height: 30vh; z-index: 200; margin: 0 auto;"></div>
        </div>
        <div class="top10">
            <div class="cardname">TOP10技术问题</div>
            <div class="technicalQ">
                <div v-for="(item, index) in items" :key="index">
                    {{ item }}
                </div>
            </div>
        </div>
        <div class="Meeting">
            <div class="cardname">会议信息</div>
            <div class="Meetingcalendar">
                <div v-for="(item, index) in items" :key="index">
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MtcArj21',
    data() {
        return {
            items: ["Item 1", "Item 2", "Item 3"],
            chart: null
        };
    },
    mounted() {
        this.initChart();
    },
    methods: {
        initChart() {
            const chart = this.$echarts.init(this.$refs.chart);
            chart.setOption({
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

<style>
.question_follow {
    background-image: url('./pic/questionfollow.png');
    width: 91vw;
    height: auto;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    margin-top: 2vh;
    justify-content: center;
    align-items: center;
}

.jianba {
    background-image: url('./pic/jianba.png');
    width: 5vw;
    height: auto;
}

.cardname::before {
    content: '';
    display: inline-block;
    width: 2vw;
    height: 1em;
    background-color: #3271F4;
    vertical-align: middle;
    margin-right: 1vh;
}

.cardname {
    display: inline-flexbox;
    color: #fff;
    margin-top: 1vh;
    text-align: left;
    line-height: 1em;
}

.desc_title {
    margin-top: 1vh;
}

.ATAchaption {
    background-image: url('./pic/Atachaption.png');
    width: 91vw;
    height: auto;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    margin-top: 2vh;
    justify-content: center;
    align-items: center;
}

.echartcontainer {
    min-width: 80vw;
    min-height: 30vh;
    width: 100%;
}

.top10 {
    background-image: url('./pic/Top10.png');
    width: 91vw;
    height: auto;
    z-index: -200;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    margin-top: 2vh;
    justify-content: center;
    align-items: center;
}

.technicalQ {
    color: #fff;
    display: inline-block;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 5vh;
}

.Meeting {
    background-image: url('./pic/Atachaption.png');
    width: 91vw;
    height: auto;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    margin-top: 2vh;
    justify-content: center;
    align-items: center;
}

.Meetingcalendar {
    color: #fff;
    display: inline-block;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 5vh;
}
</style>