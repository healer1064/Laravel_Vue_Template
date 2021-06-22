require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue';
import routes from './router/index';
//Import v-from
import { Form } from 'vform'
window.Form = Form;
import Swal from 'sweetalert2'
window.Swal = Swal;

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });

  window.toast = toast;

Vue.component('app-header', require('./components/Header.vue').default);
Vue.component('home', require('./pages/home.vue').default);
Vue.component('category-list', require('./pages/category/index.vue').default);
Vue.component('app-footer', require('./components/Footer.vue').default);

const app = new Vue({
    el: '#app',
    router: routes
});
