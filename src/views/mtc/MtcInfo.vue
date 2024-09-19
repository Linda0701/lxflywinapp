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
                    <div class="tracknum">{{ doingTotal }}</div>
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
            <div class="cardname">技术问题涉及ATA章节</div>
            <div ref="chart" class="chart"></div>
        </div>
        <div class="top10">
            <van-row>
                <van-col span="3">
                    <div class="fire"></div>
                </van-col>
                <van-col span="20">
                    <div class="cardnameTop10">TOP10技术问题</div>
                </van-col>
            </van-row>
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
            <div class="cardname">会议信息</div>
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
                committeeType: 1,
                modelType: 0
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
            const width = this.$refs.chart.clientWidth;
            const rightOffset = 50 * (width / 100);
            chart.setOption({
                tooltip: {},
                xAxis: {
                    name: 'ATA章节',
                    nameLocation: 'middle',
                    nameGap: 30,
                    nameTextStyle: {
                        left: 'right',
                    },
                    data: []
                },
                yAxis: {
                    name: '问题数',
                    padding: [0, 10, 10, 0] // 上下左右填充
                },
                series: [{
                    name: '数据',
                    type: 'bar',
                    data: []
                }],
                graphic: {
                    elements: [
                        {
                            type: 'text',
                            left: `calc(100% - ${rightOffset}px)`,
                            top: 'bottom',
                            style: {
                                text: 'ATA章节111',
                                textAlign: 'right',
                                fontSize: 14,
                                fontWeight: 'bold',
                                textVerticalAlign: 'bottom'
                            }
                        }
                    ]
                }
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
                    // this.meetingNameItems = res.rows.map(item => item.name)
                    // this.meetingTimeItems = res.rows.map(item => item.time)
                    // this.meetingStatusItems = res.rows.map(item => item.processStatus)
                    this.meetingInfos = res.rows.map(item => ({ name: item.name, time: item.time, processStatus: item.processStatus }))
                    console.log(this.meetingInfos)
                });
        },
    }
}
</script>

<style>
.question_follow {
    background-image: url('./pic/questionfollow.png');
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
    margin-left: auto;
    margin-top: 2vh;
    margin-right: 2.5vw;
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
    background-blend-mode: normal;
    /* 默认混合模式 */
    background-color: rgba(0, 0, 0, 0.2);
    /* 半透明颜色层 */
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
    margin-left: 2vw;
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
}


.meetingItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.blueblock {
    background-image: url('./pic/blueblock.png');
    width: 5vh;
    height: 5vh;
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
    margin-right: 3vw;
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

.outer-container {
    display: flex;
    align-items: center;
}

.meetingElse {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 88%;
}
</style>