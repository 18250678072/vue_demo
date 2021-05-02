import Vue from "vue";
import Dialog from "./index.vue";

//创建Dialog构造器
let DialogConstrutor = Vue.extend(Dialog);
let instance;

const dialog = function(options = {}) {
  if (typeof options === "string") {
    options = {
      content: options,
      onOk: () => {},
      onCancel: () => {},
    };
  }
  instance = new DialogConstrutor({
    data: options,
  });
  document.body.appendChild(instance.$mount().$el);
};
export default dialog;
