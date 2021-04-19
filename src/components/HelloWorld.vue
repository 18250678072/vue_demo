<template>
    <div class="hello">
        <h1 class=".title">{{ title }}</h1>
        <button @[event]="child">emit</button>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        title: String,
        event: String,
    },
    methods: {
        child() {
            this.$emit('appEvent', 'I am hello world');
        },
    },
};
</script>

<style lang="scss"></style>
