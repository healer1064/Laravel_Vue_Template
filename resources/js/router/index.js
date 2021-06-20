import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
import Home from '../components/Home.vue';
// Register route array
const routes = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',
        }
    ]

})
export default routes
