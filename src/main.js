import Vue from 'vue'
import App from './App.vue'
import router from './router'
// ts hello world
// import './practice/helloworld'
import './practice/function'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
