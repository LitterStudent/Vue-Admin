import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import '@/icons' // icon
import '../permission'

Vue.use(ElementUI, { locale })


Vue.config.productionTip = false

console.log(process.env);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
