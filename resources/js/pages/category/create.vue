<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="offset-md-1 col-md-10  offset-md-1">
                    <div class="card mt-2">
                        <div class="card-header">
                            Category Form

                        </div>
                        <div class="card-body">

                            <form @submit.prevent="createCategory()">

                                <div class="form-group">
                                    <label for="categorytitle"
                                        >Category name</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        name="name"
                                        v-model="categoryName"
                                        placeholder="Category name"
                                    />
                                </div>
                                <button class="btn btn-primary">Save</button>
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
    data(){
        return{
            //input form name or any name but v-model will same
            categoryName: '',
        }
    },
    methods:{
        createCategory(){
            axios.post('/api/category',{name: this.categoryName}).then((response)=>{
                console.log(response);
            })
        }
    }
};
</script>

<style></style>
