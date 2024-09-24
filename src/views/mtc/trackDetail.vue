<template>
    <div class="trackData">
        <div class="trackDetailbg">
            <div class="trackbox">
                <div class="boxTitle">问题详情</div>
                <van-row class="trackrow">
                    <van-col span="6">
                        <div class="trackTitle">问题名称</div>
                    </van-col>
                    <van-col span="18">
                        <div>{{ issueName }}</div>
                    </van-col>
                </van-row>
                <van-row class="trackrow">
                    <van-col span="6">
                        <div class="trackTitle">问题编号</div>
                    </van-col>
                    <van-col span="18">
                        <div>{{ issueNo }}</div>
                    </van-col>
                </van-row>
                <van-row class="trackrow">
                    <van-col span="6">
                        <div class="trackTitle">问题状态</div>
                    </van-col>
                    <van-col span="18">
                        <div>xxx</div>
                    </van-col>
                </van-row>
                <van-row class="trackrow">
                    <van-col span="6">
                        <div class="trackTitle">ATA</div>
                    </van-col>
                    <van-col span="18">
                        <div>xxx</div>
                    </van-col>
                </van-row>
                <van-row class="trackrow">
                    <van-col span="6">
                        <div class="trackTitle">权重</div>
                    </van-col>
                    <van-col span="18">
                        <div>xxx</div>
                    </van-col>
                </van-row>
                <van-row class="trackrow">
                    <van-col span="6">
                        <div class="trackTitle">问题描述</div>
                    </van-col>
                    <van-col span="18">
                        <div>xxx</div>
                    </van-col>
                </van-row>
            </div>
        </div>
        <div class="trackDetailbg">
            <div class="trackbox">
                <div class="boxTitle">措施/方案详情</div>
                <van-row class="trackrow">
                    <van-col span="6">
                        <div class="trackTitle">问题名称</div>
                    </van-col>
                    <van-col span="18">
                        <div>xxx</div>
                    </van-col>
                </van-row>
                <van-row class="trackrow">
                    <van-col span="6">
                        <div class="trackTitle">问题编号</div>
                    </van-col>
                    <van-col span="18">
                        <div>xxx</div>
                    </van-col>
                </van-row>
                <van-row class="trackrow">
                    <van-col span="6">
                        <div class="trackTitle">问题状态</div>
                    </van-col>
                    <van-col span="18">
                        <div>xxx</div>
                    </van-col>
                </van-row>
                <van-row class="trackrow">
                    <van-col span="6">
                        <div class="trackTitle">ATA</div>
                    </van-col>
                    <van-col span="18">
                        <div>xxx</div>
                    </van-col>
                </van-row>
                <van-row class="trackrow">
                    <van-col span="6">
                        <div class="trackTitle">权重</div>
                    </van-col>
                    <van-col span="18">
                        <div>xxx</div>
                    </van-col>
                </van-row>
                <van-row class="trackrow">
                    <van-col span="6">
                        <div class="trackTitle">问题描述</div>
                    </van-col>
                    <van-col span="18">
                        <div>xxx</div>
                    </van-col>
                </van-row>
            </div>
        </div>
    </div>
</template>
<script>
import { getDetails } from '@/api/TechnicalIssueTrack.js';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

export default {
    name: 'trackDetail',
    data() {
        return {
            issueName: '',
            issueNo: '',
            status: '',
            ata: '',
            weight: '',
            issueDsc: '',
        };
    },
    setup() {
        const router = useRouter();

        const getTrackDetails = () => {
            const id = router.currentRoute.value.query.id;
            getDetails(id)
                .then((res) => {
                    console.log(res.data.issueName);
                    this.issueName = res.data.issueName;
                    this.issueNo = res.data.issueNo;
                    this.status = res.data.status;
                    this.ata = res.data.ata;
                    this.weight = res.data.weight;
                    this.issueDsc = res.data.issueDsc;
                })
                .catch((error) => {
                    console.error('Error fetching details:', error);
                });
        };

        onMounted(() => {
            getTrackDetails();
        });

        return {
            getTrackDetails
        };
    }
};

</script>

<style>
.trackDetailbg {
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
    margin-top: 1vh;
}

.boxTitle {
    margin-bottom: 2vh;
    font-size: 1.3rem;
}
</style>