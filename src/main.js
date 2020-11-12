import Vue from 'vue'
import App from './App.vue'
// import * as VueGoogleMaps from 'vue2-google-maps'
Vue.config.productionTip = false

// Importing the global css file
import "./global.css"

new Vue({
  render: h => h(App),
}).$mount('#app')
