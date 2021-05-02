import Vue from "vue";
import Toast from "./index.vue";

//创建Toast构造器
let ToastConstrutor = Vue.extend(Toast);
let instance;

const toast = function(options = {}) {
  if (typeof options === "string") {
    options = {
      message: options,
    };
  }
  instance = new ToastConstrutor({
    data: function() {
      return options;
    },
  });
  document.body.appendChild(instance.$mount().$el);
};
export default toast;
