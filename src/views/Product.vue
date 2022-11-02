<template>
<Navigation />

    <div>
        <div class="bg-dark-purple flex justify-center items-center w-full h-screen p-10">
            <div class="h-full flex justify-center items-center">
                <img class="pict-product text-center justify-end" src="/images/Illustrationproduct.png" alt="" />
            <div class="text-center ">
                    <h1 class="mb-8 text-xl font-bold text-white">PRODUCTS</h1>
                <table class="table-fixed bg-white w-2/3 mx-auto">
                    <thead>
                        <tr>
                            <th class="border bg-light-purple border-slate-700 ...">Product ID</th>
                            <th class="border bg-light-purple border-slate-700 ...">Product Name</th>
                            <th class="border bg-light-purple border-slate-700 ...">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in products" v-bind:key="product.product_id">
                            <td class="border border-slate-700 ...">{{product.product_id}}</td>
                            <td class="border border-slate-700 ...">{{product.product_name}}</td>
                            <td class="border border-slate-700 ...">{{product.total}}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Navigation from "../components/Navigation.vue"
import API from '../utils/api'

export default {
    name: "Product",
    components: {
        Navigation
    },
    setup() {
        // Create data / vars

        // Get data

        // Run data function

        return {};
    },
    data() {
        return {
            products: []
        }
    },

    methods: {
        async getproducts() {
            const result = await API.get("/products")
            console.log(result.data.data)
            this.products = result.data.data
        },
    },
    mounted(){
        this.getproducts()
    },
    
};
</script>
