import Vue from 'vue'
import App from './App.vue'
// import * as VueGoogleMaps from 'vue2-google-maps'
Vue.config.productionTip = false


// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyD3wNIEAB9W2H07k3etD-prDjEV3IWmMqE',
//     libraries: 'places, geolocation', // This is required if you use the Autocomplete plugin
//     // OR: libraries: 'places,drawing'
//     // OR: libraries: 'places,drawing,visualization'
//     // (as you require)

//     //// If you want to set the version, you can do so:
//     // v: '3.26',
//   },
// });
new Vue({
  render: h => h(App),
}).$mount('#app')
