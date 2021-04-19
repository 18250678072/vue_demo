<template>
    <div id="app">
        {{ message }}
        <span :title="message">
            鼠标悬停几秒钟查看此处动态绑定的提示信息！
        </span>
        <ul>
            <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
        </ul>
        <input v-model="inputMsg" @input="input" @change="change" />
        <p>{{ newInputMsg }}</p>
        <p>{{ wathcMsg }}</p>
        <p>{{ wathcMsg }}</p>
        <p>{{ wathcMsg }}</p>
        <hello-world :title="message" @appEvent="appEvent" event="click"></hello-world>
        <button @click="test">test</button>
        <el-button type="primary" @click="changeLanguage">chang language</el-button>
        <div>{{ $t('common.homepage') }}</div>
        {{ now }}
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
            this.inputMsg = 'test';
        },
        appEvent(param) {
            console.log('appEvent:', param);
        },
        changeLanguage() {
            this.$i18n.locale = 'id';
        },
        input() {
            console.log('on input');
        },
        change() {
            console.log('on change');
        },
    },
    computed: {
        newInputMsg: {
            get: function() {
                console.log('computed getter');

                return 'computed getter:' + this.inputMsg;
            },
            set: function(params) {
                console.log('computed setter');
                this.inputMsg = 'computed setter: ' + params;
            },
        },
        now: function() {
            return Date.now();
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
