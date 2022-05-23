import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI);
axios.defaults.baseURL = process.env.VUE_APP_API;
Vue.prototype.$axios = axios;
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas);


/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  render: h => h(App),
}).$mount('#app')
