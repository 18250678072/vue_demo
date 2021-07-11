import Vue from 'vue';

// 自写原版：
const MyStore1 = function(options) {
    let { state = {}, mutations = {} } = options;
    this.state = new Vue({
        data: state,
    });
    this.mutations = mutations;
    this.commit = function(params, payload) {
        this.mutations[params](this.state, payload);
    };
};

// 改进版本：
const MyStore = function(options) {
    let { state = {}, mutations = {} } = options;
    this.mutations = mutations;
    this._vm = new Vue({
        data: { $$state: state },
    });
};

// 方法放在原型中
MyStore.prototype.commit = function(params, payload) {
    this.mutations[params](this.state, payload);
};

// 使用get获取可以过滤掉vue实例中其他不需要的属性和方法
Object.defineProperties(MyStore.prototype, {
    state: {
        get: function() {
            return this._vm.$data.$$state;
        },
    },
});

export default MyStore;
