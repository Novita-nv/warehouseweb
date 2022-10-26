<template>
 <Navigation />

    <div class="h-full flex space-x-10 md:space-x-64 justify-left items-center content-between p-20">
        <img class="w-2/4" src="/images/product.png" alt="" />

        <img class="w-2/4" src="/images/stock.png" alt="" />
    </div>

    <div class="h-full flex p-20">
        Let's see your product list!
        Let's see your product stock!
    </div>

</template>

<script>
import Navigation from "../components/Navigation.vue"

export default {
    name: "Dashboard",
    components: {
        Navigation
    },
    setup() {
        // Create data / vars

        // Get data

        // Run data function

        return {};
    },
};
</script>
