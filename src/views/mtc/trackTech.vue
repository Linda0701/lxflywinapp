<template>
  <div>
    <van-search v-model="value" shape="round" background="transparent" placeholder="请输入文本" class="techsearch"
      @search="onSearch" @keyup.enter="onSearch" />
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <van-tabs v-model:active="active" color="#24D5E5" background="transparent" title-active-color="#24D5E5">
      <van-tab title="全部" name="all">
        <track-info :value="value" :status="''"></track-info>
      </van-tab>
      <van-tab title="进行中" name="doing">
        <track-info :value="value" :status="'进行中'"></track-info>
      </van-tab>
      <van-tab title="持续跟踪" name="overdue">
        <track-info :value="value" :status="'持续跟踪'"></track-info>
      </van-tab>
      <van-tab title="已关闭" name="complete">
        <track-info :value="value" :status="'已关闭'"></track-info>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import trackInfo from "./trackInfo.vue";

export default {
  name: 'trackTech',
  components: { trackInfo },
  data() {
    return {
      value: '',
      active: 'all'
    };
  },
  methods: {
    onSearch() {
      // 当点击搜索图标或按回车键时，更新子组件的值
      this.$children.forEach(child => {
        if (child.$options.name === 'trackInfo') {
          child.value = this.value;
          child.techInfo();
        }
      });
    }
  }
};
</script>

<style scoped>
.techsearch {
  margin-top: 1vh;
}

.techsearch .van-search__content {
  background-color: transparent !important;
  /* 背景色透明 */
  color: #333;
  /* 文本颜色 */
}

.techsearch .van-search__content input {
  color: #be1f1f;
  /* 输入框文本颜色 */
}

.techsearch .van-search__content .van-icon {
  color: #333;
  /* 图标颜色 */
}

.techsearch .van-search__content::before,
.techsearch .van-search__content::after {
  border-color: #ccc;
  /* 边框颜色 */
}
</style>