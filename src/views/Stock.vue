<template>
    <div>
        Stock
    </div>
</template>

<script>

import API from '../utils/api'

export default {
    name: "Stock",
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
            stocks: []
        }
    },

    methods: {
        async getstocks() {
            const result = await API.get("/stocks")

            console.log(result)

            this.stocks = result
        },
    },
    mounted() {
        this.getstocks()
    },

};
</script>
