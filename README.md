# vue-app

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

-   打包页面空白报错：路径问题 https://www.wangt.cc/2021/04/%e6%89%93%e5%8c%85vue%e6%96%87%e4%bb%b6%e5%90%8e%e9%a1%b5%e9%9d%a2%e7%a9%ba%e7%99%bd%ef%bc%8c%e5%87%ba%e7%8e%b0%e6%8a%a5%e9%94%99/

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 面试题：

-   组件中的 data 为什么是一个函数：
    vue 中组件是用来复用的，为了防止 data 复用，将其定义为函数。
    https://blog.csdn.net/qq_42072086/article/details/108060494
-   computed 和 watch 区别： https://www.cnblogs.com/wuqilang/p/11241604.html

-   CDN引入资源：https://blog.csdn.net/sixam/article/details/106058083

- 临时变量：在v-for中需要对每一项的数据处理，在重复使用的时候会造成重复计算和执行，所以需要使用临时变量存储。https://forum.vuejs.org/t/topic/30395/5,category.vue 文件中有实例。