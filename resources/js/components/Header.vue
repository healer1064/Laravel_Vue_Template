<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" :to="{name: 'home'}">Laravel/Vue js SPA</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample07">
          <ul class="navbar-nav ml-auto">

            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>

            </li>
            <li class="nav-item">

            <router-link class="nav-link" to="/category-list">Category</router-link>
            <!-- <router-link class="nav-link" :to="{name: 'category-list'}">Category</router-link> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
    export default {
        mounted() {
            console.log('Component navbar mounted.')
        }
    }
</script>
