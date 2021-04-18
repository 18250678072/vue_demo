<template>
    <div id="app">
        {{ message }}
        <span :title="message">
            鼠标悬停几秒钟查看此处动态绑定的提示信息！
        </span>
        <ul>
            <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
        </ul>
        <input v-model="inputMsg" />
        <p>{{ newInputMsg }}</p>
        <p>{{ wathcMsg }}</p>
        <p>{{ wathcMsg }}</p>
        <p>{{ wathcMsg }}</p>
        <hello-world :title="message" @appEvent="appEvent"></hello-world>
        <button @click="test">反转消息</button>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
    name: 'App',
    components: {
        HelloWorld,
    },
    data() {
        return {
            message: 'aaa',
            arr: [1, 2, 3],
            inputMsg: 'input',
            wathcMsg: '',
        };
    },
    methods: {
        test() {
            console.log('test');
        },
        appEvent(param) {
            console.log('appEvent:', param);
        },
    },
    computed: {
        newInputMsg() {
            console.log('computed');
            return this.inputMsg + '1';
        },
    },
    watch: {
        inputMsg: function(val) {
            console.log('watch');
            this.wathcMsg = val + 2;
        },
    },
    created() {
        console.log('created');
        this.test();
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
