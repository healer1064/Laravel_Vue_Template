<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Post Heading</label>
              <input
                type="text"
                class="form-control"
                id="title"
                name="title"
                placeholder="Post heading here"
              />
            </div>

            <div class="form-group">
              <label for="description">Description</label>
              <textarea
                class="form-control"
                id="description"
                name="description"
                rows="3"
              ></textarea>
            </div>
            <button class="btn btn-success">Save</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="css" scoped>
</style>