import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../components/pages/home.vue';
import CategoryCreate from '../components/pages/category/create.vue';
import CategoryList from '../components/pages/category/index.vue';

// Register route array
const routes = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home,
            name: "home"
        },
        {
            path: "/category/create",
            component: CategoryCreate,
            name: "category-create"
        },
        {
            path: "/category/list",
            component: CategoryList,
            name: "category-list"
        },
    ]
});
export default routes
