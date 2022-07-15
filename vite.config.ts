/*
 * @Author: 1784026306@qq.com
 * @Date: 2022-07-10 22:51:32
 * @LastEditors: 1784026306@qq.com
 * @LastEditTime: 2022-07-10 23:06:28
 * @FilePath: \koa2typecsriptc:\Users\Administrator\Desktop\个人项目\bookkeep\vite.config.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by 1784026306@qq.com s15915138892, All Rights Reserved. 
 */
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server:{
    port:4040
  }
});
