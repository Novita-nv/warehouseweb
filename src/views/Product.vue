<template>
    <div>
        Product
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
        async getproducts() {
            const result = await API.get("/products")

            console.log(result)

            this.products = result
        },
    },
    mounted(){
        this.getproducts()
    },
    
};
</script>
