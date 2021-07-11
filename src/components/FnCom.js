const FnCom= {
      // 用函数式组件可以避免显式声明 props（Vue 2.3.0+）
      functional: true,
      // Vue 2 不支持片段 (Fragment)，所以需要套一个 div 或者别的元素保证模板正常渲染
      // Vue 3 就没有这个限制了
      render: (h, {props, scopedSlots}) => h('div', scopedSlots.default(props)),
    }
export {FnCom}