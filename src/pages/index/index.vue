<!--
 * @Author: 1784026306@qq.com
 * @Date: 2022-07-10 22:51:32
 * @LastEditors: 1784026306@qq.com
 * @LastEditTime: 2022-07-14 21:55:37
 * @FilePath: \koa2typecsriptc:\Users\Administrator\Desktop\个人项目\bookkeep\src\pages\index\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 1784026306@qq.com s15915138892, All Rights Reserved. 
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <uni-badge text="1"></uni-badge>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
const reuqerys = uni.login({
  provider: 'weixin',
  success: function (loginRes) {
    console.log(loginRes);
    uni.request({
    url: 'http://localhost:3000/uset/wxLogin', //仅为示例，并非真实接口地址。
    data: {
        code:loginRes.code
    },
    header: {
        'custom-header': 'hello' //自定义请求头信息
    },
    success: (res) => {
        console.log(res);
        
    }
});
  }
});
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
