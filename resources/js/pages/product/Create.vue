<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="offset-md-1 col-md-10 offset-md-1">
          <div class="card mt-2">
            <div class="card-header">Product Information</div>
            <div class="card-body">
              <form
                @submit.prevent="createProduct()"
                @keydown="productForm.onKeydown($event)"
              >
                <div class="form-group">
                  <label for="title">Product name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    name="title"
                    v-model="productForm.title"
                    placeholder="Product title"
                    :class="{
                      'is-invalid': productForm.errors.has('title'),
                    }"
                  />
                  <div
                    v-if="productForm.errors.has('title')"
                    v-html="productForm.errors.get('title')"
                  />
                </div>

                <div class="form-group">
                  <label for="description"
                    >About product</label
                  >
                  <textarea
                    class="form-control"
                    id="description"
                    name="description"
                    v-model="productForm.description"
                    rows="3"
                    placeholder="Product description"
                    :class="{
                      'is-invalid': productForm.errors.has('description'),
                    }"
                  ></textarea>
                  <div
                    v-if="productForm.errors.has('description')"
                    v-html="productForm.errors.get('description')"
                  />
                </div>
                 <div class="form-group">
                  <label for="price">Price</label>
                    <input type="number" class="form-control"  v-model="productForm.price" name="price">
                 </div>
                 <div class="form-group">
                  <label for="description">Image</label>
                    <input type="file" class="form-control-file" id="image" name="image">
                 </div>
                <button type="submit" class="btn btn-primary">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //input form name or any name but v-model will same
      productForm: new Form({
        title: "",
        description: "",
        price: "",
      }),
    };
  },
  methods: {
    createProduct() {
      this.productForm
        .post("/api/product", { name: this.title, description: this.description, price: this.price })
        .then(() => {
          this.productForm.title = "";
          this.productForm.description = "";
          this.productForm.price = "";
          this.$toast.success({
            title: "Success",
            message: "Product created successfully!",
          });
        })
        .catch((err) => {
          this.$toast.success({
            title: "Error",
            message: "Product not created!",
          });
        });
    },
  },
};
</script>
<style>
</style>
