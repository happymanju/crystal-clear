import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Importing the global css file
import "./global.css"

new Vue({
  render: h => h(App),
}).$mount('#app')
