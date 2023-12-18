export default {
  // 此处编写的就是Vue组件实例的配置项，通过一定语法，可以直接混入到组件内部
  // data mothods computed 生命周期函数...
  // 1.注意点：如果此处和组件内，提供了同名的data或methods，则组件内优先级更高
  // 2.如果编写了生命周期函数，则mixins中的生命周期函数和页面的生命周期函数，会用数组管理，统一执行
  methods: {
    loginConfirm() {
      // 判断token是否存在
      if (!this.$store.getters.token) {
        this.$dialog
          .confirm({
            title: '温馨提示',
            message: '此时需要先登录才能继续操作哦',
            confirmButtonText: '去登录',
            cancelButtonText: '再逛逛'
          })
          .then(() => {
            this.$router.replace({
              path: '/login',
              query: {
                backUrl: this.$route.fullPath
              }
            })
          })
          .catch(() => {})
        return true
      }
      return false
    }
  }
}
