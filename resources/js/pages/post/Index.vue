<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <router-link
            to="/post-create"
            class="float-right btn btn-primary mb-2"
            >New Post</router-link
          >

          <table class="table">
            <thead>
              <tr>
                <th scope="col">SL.</th>
                <th scope="col">Heading</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(post, index) in posts" :key="post.id">
                <th scope="row">{{ ++index }}</th>
                <td>{{ post.title }}</td>
                <td>{{ post.description }}</td>
                <td>
                  <router-link
                    :to="{ name: 'post-edit', params: { id: post.id } }"
                    >Edit
                  </router-link>
                  /
                  <router-link to="">Delete</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    //Show categories
    loadPosts() {
      axios.get("/api/post/list").then((response) => {
        this.posts = response.data;
      });
    },
  },
  mounted() {
    this.loadPosts();
  },
};
</script>

<style lang="css" scoped>
</style>