<template>

    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">Laravel VueJS SPA</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link class="p-2 text-dark" to="/">Home</router-link>
        <router-link class="p-2 text-dark" to="/category-list">Categories</router-link>
        <router-link class="p-2 text-dark" to="/post-list">Blog</router-link>
        <router-link class="p-2 text-dark" to="/product-list">Products</router-link>
      </nav>

    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>
