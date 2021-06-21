import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "../pages/home.vue";
import CategoryList from "../pages/category/index.vue";
import CategoryCreate from "../pages/category/create.vue";
// Register route array
const routes = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Home },
        { path: "/create-category", component: CategoryCreate },
        { path: "/category-list", component: CategoryList }
    ]
});

export default routes;
