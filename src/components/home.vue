<template>
    <div class="root">
        <el-container>
            <el-header>
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    :router="true"
                >
                    <el-menu-item index="/homepage">{{ $t('common.homepage') }}</el-menu-item>
                    <el-menu-item index="/homepage/category">
                        {{ $t('common.category') }}1
                    </el-menu-item>
                    <el-menu-item index="/homepage/vuexUseDemo">vuex-use-demo</el-menu-item>
                </el-menu>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '/homepage',
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
    },
    created() {
        console.log(this.$router, this.$route);
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
html,
body {
    height: 100%;
}
.root {
    height: 100%;
    display: flex;
}
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 60px;
    flex: 1;
}

body > .el-container {
    margin-bottom: 40px;
    height: 100%;
    background-color: aqua;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>
