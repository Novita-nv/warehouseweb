<template>
<Navigation />
    <div>
            <div>
                <form class="p-32 w-2/3 mx-auto flex flex-col bg-light-grey rounded-md shadow-lg">
                    <h1 class="text-2xl text-purple mb-4">Updating Product Stock</h1>
                
                    <div class="flex flex-col mb-2">
                        <label for="product_id" class="mb-1 text-sm text-purple">Product ID</label>
                        <input type="int" required class="p-2 text-gray-500 focus:outline-none" id="email" />
                    </div>
                
                    <div class="flex flex-col mb-2">
                        <label for="updated-at" class="mb-1 text-sm text-purple">Updated At</label>
                        <input type="timestampz" required class="p-2 text-gray-500 focus:outline-none" id="password" />
                    </div>

                    <div class="flex flex-col mb-2">
                        <label for="stock_in" class="mb-1 text-sm text-purple">Stock In</label>
                        <input type="int" required class="p-2 text-gray-500 focus:outline-none" id="password" />
                    </div>

                    <div class="flex flex-col mb-2">
                        <label for="stock_out" class="mb-1 text-sm text-purple">Stock Out</label>
                        <input type="int" required class="p-2 text-gray-500 focus:outline-none" id="password" />
                    </div>

                <div class="flex flex-col-reserve items-center justify-end hover:justify-evenly">
                    <button type="button" class="updating-btn mx-4 mt-6 py-2 px-6 rounded-sm self-start text-sm
                        text-black font-bold bg-yellow duration-200 border-solid
                        border-2 border-transparent hover:border-at-light-green hover:bg-white
                        hover:text-at-light-green">
                        UPDATE
                    </button>

                    <button type="button" class="cancel-btn mx-4 mt-6 py-2 px-6 rounded-sm self-start text-sm
                                text-black font-bold bg-yellow duration-200 border-solid
                                border-2 border-transparent hover:border-at-light-green hover:bg-white
                                hover:text-at-light-green">
                        CANCEL
                    </button>
                </div>
                </form>
        </div>
    </div>
</template>

<script>
import Navigation from "../components/Navigation.vue"
import API from '../utils/api'

export default {
    name: "Update",
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
