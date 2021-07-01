<template>
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

        <h2>MyStore:</h2>
        {{ myCount }}
    </div>
</template>

<script>
import InjectComA from './category/InjectComA.vue';
import InjectComB from './category/InjectComB.vue';
import Vue from 'vue';
import MySelect from './MySelect';
const themeObs = Vue.observable({ color: 'blue' });

export default {
    components: {
        InjectComA,
        InjectComB,
        MySelect,
    },
    data() {
        return {
            color: 'blue',
            selectValue: '',
        };
    },
    provide: function() {
        return {
            theme: themeObs,
        };
    },
    methods: {
        changeColor() {
            themeObs.color = 'red';
        },
    },
    computed: {
        myCount() {
            console.log(this.$myStore);
            return this.$myStore.state.count;
        },
    },
};
</script>

<style></style>
