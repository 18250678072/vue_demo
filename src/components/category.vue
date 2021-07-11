<template>
    <div>
        <!-- 临时变量 -->
        <div>
            <h1>Category</h1>
            <h2>provide inject 跨组件传值</h2>
            <button @click="changeColor">changeColor</button>
            <inject-comA></inject-comA>
            <inject-comB></inject-comB>

            <!-- <h2>v-model 组件</h2>
        <div>
            <my-select v-model="selectValue"></my-select>
            <p>{{ selectValue }}}</p>
        </div> -->

            <!-- <h2>MyStore:</h2> -->
            <!-- {{ myCount }} -->
            <h2>临时变量：</h2>
            <p>方法1:</p>
            <div v-for="item in list" :key="item">
                {{ void (message = reverse(item)) }}
                <p>{{ message }}</p>
                <!-- <p>{{ message + 1 }}</p> -->
            </div>
            <p>方法2：</p>
            <div v-for="item in list1" :key="item">
                <fn-com :defaultProps="reverse(item)">
                    <template #default="{ defaultProps }">
                        <p>{{ defaultProps }}</p>
                    </template>
                </fn-com>
            </div>
        </div>
        <!-- provider inject -->
        <div>
            <h1>Category</h1>
            <button @click="changeColor">changeColor</button>
            <inject-comA></inject-comA>
            <inject-comB></inject-comB>
        </div>
    </div>
</template>

<script>
import { FnCom } from './FnCom';
import Vue from 'vue';
import InjectComA from './category/InjectComA.vue';
import InjectComB from './category/InjectComB.vue';
const themeObs = Vue.observable({ color: 'blue' });

export default {
    components: {
        FnCom,
        InjectItema,
        InjectItemb,
    },
    data() {
        return {
            list: ['a', 'b', 'c'],
            list1: ['e', 'd', 'f'],
            theme: themeObs,
        };
    },
    computed: {
        message1() {
            return this.list[this.list.length - 1];
        },
    },
    methods: {
        reverse(item) {
            console.log('methods');
            return (item + 'change')
                .split('')
                .reverse()
                .join('');
        },
        changeColor() {
            themeObs.color = 'red';
        },
        computed: {
            // myCount() {
            //     console.log(this.$myStore);
            //     return this.$myStore.state.count;
            // },
        },
    },
    provide: function() {
        return {
            theme: themeObs,
        };
    },
    created() {},
};
</script>

<style></style>
