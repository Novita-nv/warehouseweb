<template>
    <div>
        Update Product
    </div>
</template>

<script>

import API from '../utils/api'

export default {
    name: "Product",
    components: {

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
        async updateproduct() {
            const result = await API.get("/products")

            console.log(result)

            this.products = result
        },
    },
    mounted() {
        this.updateproduct()
    },

};
</script>
