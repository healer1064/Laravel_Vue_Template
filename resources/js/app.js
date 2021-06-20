/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


window.Vue = require('vue');
import routes from './router/index';

require('./bootstrap');

Vue.component('app-header', require('./components/Header.vue').default);


const app = new Vue({
    el: '#app',
    router: routes
});
