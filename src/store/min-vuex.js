import Vue from 'vue';
const MyStore = function(options) {
    let { state = {}, mutations = {} } = options;
    this.state = new Vue({
        data: state,
    });
    this.mutations = mutations;
    this.commit = function(params, payload) {
        this.mutations[params](this.state, payload);
    };
};
export default MyStore;
