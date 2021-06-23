<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <router-link to="/product-create" class="float-right btn btn-primary mb-2">New Post</router-link>
        </div>

        <div class="container">
        <br>  <p class="text-center">Products</p>
        <hr>
        <div class="row">
        <div class="col-md-4">
            <figure class="card-product">
                <div class="img-wrap">
                    <img src="https://dummyimage.com/600x400/000/fff">
                    <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                </div>
                <figcaption class="info-wrap">
                    <h6 class="title text-dots"><a href="#">Good item name</a></h6>
                    <div class="action-wrap">
                        <a href="#" class="btn btn-primary btn-sm float-right"> Order </a>
                        <div class="price-wrap h5">
                            <span class="price-new">$1280</span>
                            <del class="price-old">$1980</del>
                        </div> <!-- price-wrap.// -->
                    </div> <!-- action-wrap -->
                </figcaption>
            </figure> <!-- card // -->
        </div> <!-- col // -->
        <div class="col-md-4">
            <figure class="card-product">
                <div class="img-wrap">
                    <img src="https://dummyimage.com/600x400/000/fff">
                    <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                </div>
                <figcaption class="info-wrap">
                    <h6 class="title text-dots"><a href="#">Good item name</a></h6>
                    <div class="action-wrap">
                        <a href="#" class="btn btn-primary btn-sm float-right"> Order </a>
                        <div class="price-wrap h5">
                            <span class="price-new">$1280</span>
                            <del class="price-old">$1980</del>
                        </div> <!-- price-wrap.// -->
                    </div> <!-- action-wrap -->
                </figcaption>
            </figure> <!-- card // -->
        </div> <!-- col // -->
        <div class="col-md-4">
            <figure class="card-product">
                <div class="img-wrap">
                    <img src="https://dummyimage.com/600x400/000/fff">
                    <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                </div>
                <figcaption class="info-wrap">
                    <h6 class="title text-dots"><a href="#">Good item name</a></h6>
                    <div class="action-wrap">
                        <a href="#" class="btn btn-primary btn-sm float-right"> Order </a>
                        <div class="price-wrap h5">
                            <span class="price-new">$1280</span>
                            <del class="price-old">$1980</del>
                        </div> <!-- price-wrap.// -->
                    </div> <!-- action-wrap -->
                </figcaption>
            </figure> <!-- card // -->
        </div> <!-- col // -->


        </div> <!-- row.// -->
        </div>
        <!--container end-->
        <br><br><br>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    //Show categories
    loadProducts() {
        axios.get("/api/product").then((response) => {
        this.products = response.data;
      });
    },
    deletePost(id) {
         Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(result => {
            if (result.isConfirmed) {
                    axios.post(`/api/product/delete/${id}`)
                    .then(() => {
                        Swal.fire(
                            "Deleted!",
                            "Your file has been deleted.",
                            "success"
                        );
                        Fire.$emit("AfterCreate");
                    })

                    .catch(() => {
                        Swal(
                            "Failed",
                            "There was something wrong",
                            "warning"
                        );
                    });
            }
        });
    }
  },
  mounted() {
    this.loadProducts();
    Fire.$on("AfterCreate", () => {
        this.loadProducts();
    });
  },
};
</script>

<style lang="css">

      .card-product:after {
        content: "";
        display: table;
        clear: both;
        visibility: hidden; }
      .card-product .price-new, .card-product .price {
        margin-right: 5px; }
      .card-product .price-old {
        color: #999; }
      .card-product .img-wrap {
        border-radius: 3px 3px 0 0;
        overflow: hidden;
        position: relative;
        height: 220px;
        text-align: center; }
        .card-product .img-wrap img {
          max-height: 100%;
          max-width: 100%;
          object-fit: cover; }

          .card-product .info-wrap {
        overflow: hidden;
        padding: 15px;
        border-top: 1px solid #eee; }
      .card-product .action-wrap {
        padding-top: 4px;
        margin-top: 4px; }
      .card-product .bottom-wrap {
        padding: 15px;
        border-top: 1px solid #eee; }
      .card-product .title {
        margin-top: 0; }

</style>
