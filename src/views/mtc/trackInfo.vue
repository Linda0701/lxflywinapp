<template>
    <div class="trackData">
        <div v-if="hasResults || value">
            <div v-for="(item, index) in filteredTechInfos" :key="index" class="trackDataInfo">
                <div class="trackbox" @click="trackDetail(item)">
                    <div class="divFlex">
                        <div class="trackName">{{ item.issueName }}</div>
                        <div v-if="item.status == '进行中'" class="trackDoing">
                            {{ item.status }}
                        </div>
                        <div v-if="item.status == '持续跟踪'" class="trackOverdue">
                            {{ item.status }}
                        </div>
                        <div v-if="item.status == '已关闭'" class="trackClose">
                            {{ item.status }}
                        </div>
                    </div>
                    <van-row class="trackrow">
                        <van-col span="6">
                            <div class="trackTitle">问题编号</div>
                        </van-col>
                        <van-col span="18">
                            <div class="trackNo">{{ item.issueNo }} </div>
                        </van-col>
                    </van-row>
                    <van-row class="trackrow">
                        <van-col span="6">
                            <div class="trackTitle">ATA</div>
                        </van-col>
                        <van-col span="10">
                            <div class="trackAta"> {{ item.ata }} </div>
                        </van-col>
                    </van-row>
                    <van-row class="trackrow">
                        <van-col span="6">
                            <div class="trackTitle">问题描述</div>
                        </van-col>
                        <van-col span="14">
                            <div class="trackDsc">{{ item.issueDsc }}</div>
                        </van-col>
                    </van-row>
                </div>
            </div>
        </div>
        <div v-else class="no-results-message">
            没有找到匹配的结果
        </div>
    </div>
</template>

<script>
import { getPage } from '@/api/TechnicalIssueTrack.js';
import { useRouter } from 'vue-router';

export default {
    name: 'trackInfo',
    props: {
        status: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            params: {
                pageSize: 20,
                pageNum: 1,
                dataType: 0,
                aircraftType: 0,
                status: ''
            },
            techInfos: [],
            hasResults: true,
            errorMessage: '',
            selectedTrackId: ''
        };
    },
    computed: {
        filteredTechInfos() {
            if (!this.value) return this.techInfos;
            return this.techInfos.filter(item => {
                const searchValue = this.value.toLowerCase();
                return (
                    item.issueName.toLowerCase().includes(searchValue) ||
                    item.issueNo.toLowerCase().includes(searchValue) ||
                    item.issueDsc.toLowerCase().includes(searchValue)
                );
            });
        }
    },
    setup() {
        const router = useRouter();

        const trackDetail = (track) => {
            router.push({ path: '/trackDetail', query: { id:  track.id} }).catch(err => {
                console.error('Failed to navigate:', err);
            });
        };
        return {
            trackDetail
        };
    },
    mounted() {
        this.params.status = this.status;
        this.techInfo();
    },
    methods: {
        techInfo() {
            const params = this.params;
            getPage(params)
                .then((res) => {
                    this.techInfos = res.rows.map(item => ({ issueName: item.issueName, issueNo: item.issueNo, ata: item.ata, issueDsc: item.issueDsc, status: item.status,id: item.id }));
                    this.hasResults = res.rows.length > 0;
                })
                .catch(error => {
                    console.log(error);
                });

        },
    }
}
</script>

<style>
.trackData {
    width: 91vw;
    height: auto;
    display: inline-block;
    margin-top: 2vh;
    justify-content: center;
    align-items: center;
    margin-bottom: 3vh;
    text-align: left;
}

.trackName {
    font-size: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    /* 隐藏超出部分 */
    text-overflow: ellipsis;
    /* 显示省略号 */
    max-width: 55vw;
    /* 设置最大宽度 */
    color: #ECECEC;

}

.divFlex {
    display: flex;
    justify-content: space-between;
}

.trackbox {
    margin-top: 1.5vh;
    margin-left: 2.5vh;
    margin-bottom: 1.5vh;
}

.trackrow {
    margin-top: 1vh;
}

.trackDataInfo {
    background-image: url('./pic/Atachaption.png');
    width: 91vw;
    height: auto;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    justify-content: center;
    align-items: center;
    margin-bottom: 2vh;
}

.trackDoing::before {
    content: '';
    display: inline-block;
    background-image: url('./pic/doing.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 16px;
    height: 16px;
    /* 垂直居中 */
    vertical-align: middle;
    margin-right: 2vw;
}

.trackDoing {
    margin-right: 2vh;
    /* 垂直居中 */
    align-items: center;
    color: #08ACFF;
}

.trackOverdue::before {
    content: '';
    display: inline-block;
    background-image: url('./pic/overdue.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 16px;
    height: 16px;
    /* 垂直居中 */
    vertical-align: middle;
    margin-right: 2vw;
}

.trackOverdue {
    margin-right: 2vh;
    /* 垂直居中 */
    align-items: center;
    color: #22C885;
}

.trackClose::before {
    content: '';
    display: inline-block;
    background-image: url('./pic/close.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 16px;
    height: 16px;
    /* 垂直居中 */
    vertical-align: middle;
    margin-right: 2vw;
}

.trackClose {
    margin-right: 2vh;
    /* 垂直居中 */
    align-items: center;
    color: #A9A9A9;
}

.trackNo {
    margin-right: 10vw;
    color: rgba(255, 255, 255, 0.6);
}

.trackAta {
    margin-right: 10vw;
    color: rgba(255, 255, 255, 0.6);
}

.trackDsc {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    /* 使用 WebKit 引擎的弹性盒子模型 */
    display: -webkit-box;
    /* 最多显示三行 */
    -webkit-line-clamp: 3;
    /* 设置盒子的方向为垂直 */
    -webkit-box-orient: vertical;
    color: rgba(255, 255, 255, 0.6);
}

.trackTitle {
    color: #ECECEC
}
</style>