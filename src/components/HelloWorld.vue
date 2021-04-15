<template>
    <div class="hello">
        <h1>{{ title }}</h1>
        <button @click="child">emit</button>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        title: String,
    },
    methods: {
        child() {
            this.$emit('appEvent', 'I am hello world');
        },
    },
};
</script>
