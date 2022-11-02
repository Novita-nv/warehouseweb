<template>
    <Navigation />

    <div>
        <div class="bg-light-purple flex justify-center items-center w-full h-screen p-10">
            <div class="h-full flex justify-center items-center">
                <img class="pict-stock w-2/4 text-center justify-end" src="/images/IllustrationStock.png" alt="" />
                    <div class="text-center ">
                        <h1 class="mb-8 text-xl font-bold text-black">PRODUCTS STOCK</h1>
                        <table class="table-fixed bg-white w-2/3 mx-auto">
                            <thead>
                                <tr>
                                    <th class="border bg-dark-purple text-white border-slate-700 ...">Product ID</th>
                                    <th class="border bg-dark-purple text-white border-slate-700 ...">Product Name</th>
                                    <th class="border bg-dark-purple text-white border-slate-700 ...">In</th>
                                    <th class="border bg-dark-purple text-white border-slate-700 ...">Out</th>
                                    <th class="border bg-dark-purple text-white border-slate-700 ...">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border border-slate-700 ...">1</td>
                                    <td class="border border-slate-700 ...">Maybelline Brow Cara</td>
                                    <td class="border border-slate-700 ...">10</td>
                                    <td class="border border-slate-700 ...">3</td>
                                    <td class="border border-slate-700 ...">7</td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-700 ...">2</td>
                                    <td class="border border-slate-700 ...">Maybelline Fit Me Powder</td>
                                    <td class="border border-slate-700 ...">15</td>
                                    <td class="border border-slate-700 ...">9</td>
                                    <td class="border border-slate-700 ...">6</td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-700 ...">3</td>
                                    <td class="border border-slate-700 ...">Luxcrime Two Way Cake</td>
                                    <td class="border border-slate-700 ...">10</td>
                                    <td class="border border-slate-700 ...">3</td>
                                    <td class="border border-slate-700 ...">7</td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-700 ...">4</td>
                                    <td class="border border-slate-700 ...">Azarine Sunscreen</td>
                                    <td class="border border-slate-700 ...">13</td>
                                    <td class="border border-slate-700 ...">8</td>
                                    <td class="border border-slate-700 ...">5</td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-700 ...">5</td>
                                    <td class="border border-slate-700 ...">Reveline Liptint</td>
                                    <td class="border border-slate-700 ...">13</td>
                                    <td class="border border-slate-700 ...">4</td>
                                    <td class="border border-slate-700 ...">9</td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-700 ...">6</td>
                                    <td class="border border-slate-700 ...">Somethinc Loose Powder</td>
                                    <td class="border border-slate-700 ...">10</td>
                                    <td class="border border-slate-700 ...">2</td>
                                    <td class="border border-slate-700 ...">8</td>
                                </tr>
                            </tbody>
                        </table>
                    <button type="submit" class="update-btn mt-6 py-2 px-6 rounded-sm self-start text-sm
                                            text-black font-bold bg-yellow duration-200 border-solid
                                            border-2 border-transparent hover:border-at-light-green hover:bg-white
                                            hover:text-at-light-green">
                        UPDATE STOCK HERE
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Navigation from "../components/Navigation.vue"
import API from '../utils/api'

export default {
    name: "Stock",
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

            console.log(result)

            this.products = result
        },
    },
    mounted() {
        this.getproducts()
    },

};
</script>
