<!--
 * @Author: 1784026306@qq.com
 * @Date: 2022-07-10 22:51:32
 * @LastEditors: cwd
 * @LastEditTime: 2022-07-15 16:53:29
 * @FilePath: \koa2typecsripte:\学习\小程序前端\bookkeep\src\pages\index\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 1784026306@qq.com s15915138892, All Rights Reserved. 
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title" @click="getuserfile()">{{ title }}</text>
      <uni-badge text="1"></uni-badge>
    </view>
  </view>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
const title = ref("Hello");
// let code = "";

const reuqerys = uni.login({
  provider: "weixin",
  success: function (loginRes) {
    uni.request({
      url: "http://localhost:3000/user/wxLogin", //仅为示例，并非真实接口地址。
      data: {
        code: loginRes.code,
      },
      header: {
        "custom-header": "hello", //自定义请求头信息
      },
      success: (res) => {
        // console.log(res);
      },
    });
  },
});
const getuserfile = () => {
  // console.log("code是" + code);


 uni.getUserProfile({
    desc: "获取登录信息",
    lang: "zh_CN",
    success: function (user) {
      console.log(user);
      uni.login({
 provider: "weixin",
  success: function (loginRes) {


      uni.request({
        url: "http://localhost:3000/user/wxUserInfo", //仅为示例，并非真实接口地址。
        data: {
          code: loginRes.code,
          iv: user.iv,
          encryptedData: user.encryptedData,
        },
        header: {
          "custom-header": "hello", //自定义请求头信息
        },
        success: (res) => {
          console.log(res);
        },
      });
    },
    fail: function (err) {
      console.log(err);
    },
  });
    }
})
 
};
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
