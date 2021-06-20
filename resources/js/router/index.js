import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../components/pages/home.vue';
import CategoryList from '../components/pages/category/index.vue';
import CreateCategory from '../components/pages/category/create.vue';

// Register route array
const routes = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',
        },
        {
            path: '/category',
            component: CategoryList,
            name: 'categoryList',
        },
        {
            path: '/category/create',
            component: CreateCategory,
            name: 'create-category',
        },

    ]

})
export default routes
