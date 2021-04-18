import Vue from 'vue';
import App from './App.vue';
import { Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import i18n from './i18n/'; //引入i8n配置

locale.use(lang);

Vue.config.productionTip = false;
Vue.use(Button);
new Vue({
    i18n,
    render: h => h(App),
}).$mount('#app');
