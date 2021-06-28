<template>
    <div>
        <h1 :style="{ color: theme.color }">InjectComB</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    inject: {
        theme: {
            default: () => {},
        },
    },
    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped></style>
