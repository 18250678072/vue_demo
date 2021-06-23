<template>
    <div>
        <h1 :style="{ color: this.theme.color }">InjectComA</h1>
        <button @click="changeColor">changeColor</button>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    inject: ['theme'],
    mounted() {},
    methods: {
        changeColor() {
            console.log(this.theme);
            this.theme.color = 'green';
        },
    },
};
</script>

<style lang="scss" scoped></style>
