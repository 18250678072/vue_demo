<template>
  <div id="dialog">
    <div class="dialog-box">
      <p class="title">{{ title }}</p>
      <p class="content">{{ content }}</p>
      <div class="btn-box">
        <button class="left-btn" @click="cancel">{{ left_buttton }}</button>
        <button class="right-btn" @click="ok">{{ right_buttton }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "title",
      content: "content",
      left_buttton: "cancel",
      right_buttton: "confirm",
    };
  },
  methods: {
    //点击取消按钮
    cancel() {
      this.onCancel(); //点击取消的回调函数
      this.$destroy(true); //销毁组件
      this.$el.parentNode.removeChild(this.$el); //父元素中移除dom元素（$el为组件实例）
    },
    //点击确定按钮
    ok() {
      this.onOk(); //点击确定的回调函数
      this.$destroy(true); //销毁组件k
      this.$el.parentNode.removeChild(this.$el); //父元素中移除dom元素（$el为组件实例）
    },
  },
};
</script>

<style lang="less" scoped>
#dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9999;
  .dialog-box {
    width: 400px;
    border-radius: 2px;
    background-color: #fff;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px 30px;
    box-sizing: border-box;
    .title {
      font-size: 20px;
      margin-bottom: 15px;
      text-align: center;
    }
    .content {
      font-size: 16px;
      line-height: 22px;
    }
    .btn-box {
      width: 100%;
      height: 70px;
      padding-top: 32px;
      padding-left: 170px;
      box-sizing: border-box;
      button {
        width: 65px;
        height: 38px;
        font-size: 16px;
        margin-left: 20px;
        border-radius: 2px;
        border: none;
        outline: none;
        cursor: pointer;
      }
      .left-btn {
        background-color: #dcdfe6;
        color: #606266;
      }
      .right-btn {
        background-color: #409eff;
        color: #fff;
      }
    }
  }
}
</style>
