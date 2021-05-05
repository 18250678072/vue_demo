// 引入element 中文包
import cnLocale from "element-ui/lib/locale/lang/zh-CN";
// 导出为meaasges
export default {
  common: {
    homepage: "首页",
    category: "分类",
    logout: "登出",
  },
  audit: {
    mobile: "手机号：",
    app: "注册来源：",
    submit: "提交",
    error: {
      empty: "请输入手机号",
      uncorrect: "请输入正确的手机号",
    },
  },
  ...cnLocale, // 混入element 中文包
};
