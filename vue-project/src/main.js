import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import router from './routes/Index'
import css from '../css/index.css'
import axios from "axios"
import vuex from "vuex"
import dayjs from 'dayjs'


Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(css)
Vue.use(vuex)
Vue.prototype.axios=axios
Vue.prototype.dayjs=dayjs
Vue.config.productionTip = false

const vm=new Vue({
  el:'#app',
  render:h=>h(App),
  router
})
