<template>
<Navigation />

    <div class="flex items-center justify-between h-screen">
        <figure class="h-full flex flex-col justify-center items-center p-20">
            <button type="button" v-on:click="$router.push('/product')" class="product-button font-bold p-8 underline underline-offset-4">
                PRODUCT
            </button>
            <div>
                <img class="gambar-product" src="/images/product.png" alt="" />
            </div>
            <figcaption class="p-5">
                Lets see your product list!
            </figcaption>
        </figure>

        <figure class="h-full flex flex-col justify-center items-center p-20">
            <button type="button" v-on:click="$router.push('/stock')" class="stock-btn font-bold p-8 underline underline-offset-4">
                STOCK
            </button>
            <div>
                <img class="gambar-stock" src="/images/stock.png" alt="" />
            </div>
            <figcaption class="p-5">
                Lets see your stock list!
            </figcaption>
        </figure>
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
