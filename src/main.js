import Vue from 'vue';
import App from './App.vue';
import './cube-ui';
import './register';
import 'common/stylus/index.styl';
import '../mock/mock'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
