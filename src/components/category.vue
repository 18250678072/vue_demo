<template>
    <div>
        <h1>Category</h1>
        <button @click="changeColor">changeColor</button>
        <inject-comA></inject-comA>
        <inject-comB></inject-comB>
    </div>
</template>

<script>
import InjectComA from './category/InjectComA.vue';
import InjectComB from './category/InjectComB.vue';
import Vue from 'vue';
const themeObs = Vue.observable({ color: 'blue' });

export default {
    components: {
        InjectComA,
        InjectComB,
    },
    data() {
        return {
            color: 'blue',
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
};
</script>

<style></style>
