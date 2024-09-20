<template>
    <div>
        <div class="question_follow">
            <van-row>
                <van-col span="16">
                    <div class="cardname">技术问题跟踪</div>
                </van-col>
                <van-col span="8">
                    <div class="jianba"></div>
                </van-col>
            </van-row>
            <van-row>
                <van-col span="8">
                    <div class="tracknum">{{ doingTotal }}
                    </div>
                    <div class="trackstate">进行中</div>
                </van-col>
                <van-col span="8">
                    <div class="tracknum">{{ overdueDevelopmentTotal }}</div>
                    <div class="trackstate">持续跟进</div>
                </van-col>
                <van-col span="8">
                    <div class="tracknum">{{ completeTotal }}</div>
                    <div class="trackstate">已关闭</div>
                </van-col>
            </van-row>
        </div>
        <div class="ATAchaption">
            <div class="titlecontainer">
                <div class="cardname">技术问题涉及ATA章节</div>
                <div class="jiantou"></div>
            </div>
            <div ref="chart" class="chart"></div>
        </div>
        <div class="top10">
            <div class="titlecontainer">
                <div class="outer-container">
                    <div class="fire"></div>
                    <div class="cardnameTop10">TOP10技术问题</div>
                </div>
                <div class="jiantou"></div>
            </div>
            <van-row>
                <van-col span="16">
                    <div v-for="(item, index) in issueNameItems" :key="index" class="issueName">
                        {{ item }}
                    </div>
                </van-col>
                <van-col span="8">
                    <div v-for="(item, index) in issueNoItems" :key="index" class="issueNo">
                        {{ item }}
                    </div>
                </van-col>
            </van-row>
        </div>
        <div class="Meeting">
            <div class="titlecontainer">
                <div class="cardname">会议信息</div>
                <div class="jiantou"></div>
            </div>
            <div v-for="(item, index) in meetingInfos" :key="index">
                <div class="outer-container">
                    <div class="blueblock">
                    </div>
                    <div class="meetingElse">
                        <div class="meetingItem">
                            <div class="meetingName">{{ item.name }}</div>
                            <div class="meetingStatus">{{ item.processStatus }}</div>
                        </div>
                        <div class="meetingTime">{{ item.time.substring(0, 16) }}</div>
                        <div class="horizontal-line"></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { getStatic, getTop10Ata, getTop10 } from '@/api/TechnicalIssueTrack.js';
import { getMeetingInfo } from '@/api/MettingInfo.js';
import { processStatus } from '@/utils/dict.js';
import { useRouter } from 'vue-router';

export default {
    name: 'MtcArj21',
    props: {
        aircraftType: {
            type: Number,
            default: 1
        }  // 0：C919；1：ARJ21
    },
    data() {
        return {
            issueNameItems: [],
            issueNoItems: [],
            chart: null,
            dataType: 1,     // 0：FTC； 1：MTC
            doingTotal: 0,
            completeTotal: 0,
            overdueDevelopmentTotal: 0,
            bo: {
                // name: '',
                committeeType: 1,  // 0：FTC； 1：MTC
                modelType: (this.aircraftType === 0) ? 1 : 0    // 1：C919 0：ARJ21； 
            },
            pageQuery: {
                pageSize: 10,
                pageNum: 1,
                orderByColumn: "string",
                isAsc: "string",
                firstNum: 0
            },
            meetingNameItems: [],
            meetingTimeItems: [],
            meetingStatusItems: [],
            ataItems: [],
            totalCountItems: [],
            meetingInfos: [],
        };
    },
    setup() {
        const router = useRouter();

        const trackpage = () => {
            router.push('/trackTech');
        };
        return {
            trackpage
        };
    },
    mounted() {
        this.initChart();
        this.technicalQuestionTrack();
        this.technicalQuestionAta();
        this.technicalQuestion();
        this.meetingInfo();
        this.resizeChart();
        // 添加窗口大小变化监听器
        window.addEventListener('resize', this.resizeChart);
    },
    beforeUnmount() {
        if (this.chart) {
            this.chart.dispose(); // 销毁图表实例
        }
        window.removeEventListener('resize', this.resizeChart);
    },
    methods: {
        technicalQuestionTrack() {
            const params = {
                dataType: this.dataType,
                aircraftType: this.aircraftType
            };
            getStatic(params)
                .then((res) => {
                    this.doingTotal = res.data.doingTotal;
                    this.completeTotal = res.data.completeTotal;
                    this.overdueDevelopmentTotal = res.data.overdueDevelopmentTotal;
                });
        },
        initChart() {
            const chart = this.$echarts.init(this.$refs.chart);
            chart.setOption({
                tooltip: {},
                xAxis: {
                    name: '\n\n\n\n\n\nATA章节',
                    nameLocation: 'end',
                    nameGap: 30,
                    nameTextStyle: {
                        padding: [0, 0, 0, -80],
                        color: '#ffffff'
                    },
                    axisLabel: {
                        color: '#B0B0B8'
                    },
                    data: []
                },
                yAxis: {
                    name: '问题数',
                    nameTextStyle: {
                        padding: [0, 10, 10, 0],
                        color: '#ffffff'
                    },
                    axisLabel: {
                        color: 'rgba(255,255,255,0.4)'
                    },
                    splitLine: { // 设置虚线样式
                        show: true,
                        lineStyle: {
                            type: 'dashed', // 虚线类型
                            width: 1,
                            color: '#F4F4F4' // 虚线颜色
                        }
                    },
                    // 设置y轴刻度间隔
                    interval: 5,
                    // 禁用边界间隙
                    boundaryGap: false
                },
                series: [{
                    name: '数据',
                    type: 'bar',
                    barWidth: 8,
                    data: []
                }]
            });
            this.chart = chart; // 保存图表实例
        },
        resizeChart() {
            if (this.chart) {
                this.chart.resize();
            }
        },
        technicalQuestionAta() {
            const params = {
                dataType: this.dataType,
                aircraftType: this.aircraftType
            };
            getTop10Ata(params)
                .then((res) => {
                    this.ataItems = res.data.map(item => item.ata)
                    this.totalCountItems = res.data.map(item => item.totalCount)
                    // 更新图表数据
                    this.updateChartSeriesData();
                });
        },
        updateChartSeriesData() {
            if (this.chart) {
                this.chart.setOption({
                    xAxis: {
                        data: this.ataItems
                    },
                    series: [{
                        name: '数据',
                        type: 'bar',
                        data: this.totalCountItems
                    }]
                });
            }
        },
        technicalQuestion() {
            const params = {
                dataType: this.dataType,
                aircraftType: this.aircraftType
            };
            getTop10(params)
                .then((res) => {
                    this.issueNameItems = res.data.map(item => item.issueName)
                    this.issueNoItems = res.data.map(item => item.issueNo)
                    // console.log(res)
                });
        },
        meetingInfo() {
            const bo = this.bo;
            const pageQuery = this.pageQuery;
            getMeetingInfo(bo, pageQuery)
                .then((res) => {
                    this.meetingInfos = res.rows.map(item => ({ name: item.name, time: item.time, processStatus: processStatus(item.processStatus) }))
                });
        },
    }
}
</script>

<style>
.question_follow {
    background-image: url('./pic/questionfollow.png');
    z-index: -10;
    width: 91vw;
    height: 14vh;
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
    width: 5vh;
    height: 5vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-left: auto;
    margin-top: 1vh;
    margin-right: 3vw;
}



.cardname::before {
    content: '';
    display: inline-block;
    width: 0.8vw;
    height: 1em;
    background-color: #3271F4;
    vertical-align: middle;
    margin-left: 4vw;
    margin-right: 2vw;
}

.cardname {
    display: inline-flexbox;
    color: #fff;
    margin-top: 2.5vh;
    text-align: left;
    line-height: 1em;
}

.chart {
    display: inline-block;
    width: 80vw;
    height: 40vh;
    z-index: 200;
    margin: 0 auto;
}

.fire {
    background-image: url('./pic/fire.png');
    width: 3vh;
    height: 3vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-left: 3vw;
    margin-top: 2vh;
    margin-right: 1vw;
}

.cardnameTop10 {
    display: inline-flexbox;
    color: #fff;
    margin-top: 2.5vh;
    text-align: left;
    line-height: 1em;
}

.tracknum {
    font-size: 1.3rem;
    margin-top: 0.5vh;
}

.trackstate {
    font-size: 0.8rem;
    margin-top: 0.5vh;
}

.ATAchaption::before {
    content: "";
    background-image: url('./pic/Atachaption2.png');
    background-repeat: no-repeat;
    background-position: center right;
    opacity: 0.5;
    /* 设置透明度为 20% */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    /* 靠右对齐 */
    bottom: 0;
    width: auto;
    /* 自动宽度 */
    height: 100%;
    /* 全高 */
    z-index: 1;
    /* 确保伪元素在上方 */
}

.ATAchaption {
    background-image: url('./pic/Atachaption.png');
    background-blend-mode: multiply;
    width: 91vw;
    height: auto;
    position: relative;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    margin-top: 2vh;
    justify-content: center;
    align-items: center;
    /* 默认混合模式 */
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

.issueName::before {
    content: '';
    display: inline-block;
    width: 0.5vw;
    height: 0.5vw;
    background-color: #ffffff;
    vertical-align: middle;
    margin-left: 0.5vw;
    margin-right: 2vw;
    border-radius: 50%;
    /* 设置为圆形 */
}

.issueName {
    white-space: nowrap;
    /* 不换行 */
    overflow: hidden;
    /* 隐藏超出部分 */
    text-overflow: ellipsis;
    /* 显示省略号 */
    max-width: 50vw;
    /* 设置最大宽度 */
    text-align: left;
    margin-left: 3vw;
    margin-top: 1.5vh;
    font-size: 0.8rem;
}

.issueNo {
    margin-top: 1.5vh;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
    text-align: right;
    margin-right: 2vw;
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
    margin-bottom: 3vh;
}


.meetingItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;
}

.blueblock {
    background-image: url('./pic/clock.png');
    width: 4vh;
    height: 4vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-left: 3vw;
    margin-right: 3vw;
    margin-bottom: 2vh;
}

.meetingName {
    white-space: nowrap;
    /* 不换行 */
    overflow: hidden;
    /* 隐藏超出部分 */
    text-overflow: ellipsis;
    /* 显示省略号 */
    max-width: 50vw;
    /* 设置最大宽度 */
    text-align: left;
    margin-top: 2vh;
}

.meetingTime {
    white-space: nowrap;
    /* 不换行 */
    overflow: hidden;
    /* 隐藏超出部分 */
    text-overflow: ellipsis;
    /* 显示省略号 */
    max-width: 70vw;
    /* 设置最大宽度 */
    text-align: left;
    margin-top: 1vh;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.8rem;
}

.meetingStatus {
    margin-top: 2vh;
    text-align: right;
    font-size: 0.8rem;
}


.horizontal-line {
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    width: calc(100% - 3vw);
    /* 设置宽度减去右边的 3vw */
    ;
    margin: 20px 0;
    margin-right: 3vw;
}

.outer-container::before {
    content: "";
    width: 1vw;
}

.outer-container {
    display: flex;
    align-items: center;
}

.titlecontainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;
}

.meetingElse {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
}

.jiantou {
    background-image: url('./pic/jiantou.png');
    width: 2vh;
    height: 2vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-top: 2.5vh;
}
</style>