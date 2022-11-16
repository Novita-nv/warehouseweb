<template>
    <div class="max-w-screen-sm mx-auto px-4 py-10">
        <!-- Error Handling -->
        <div class="flex justify-center mb-8">
            <img class="h-16 text-center" src="/images/logo.png" alt="" />
        </div>
        <!-- Login -->
        <form class="p-8 flex flex-col bg-light-grey rounded-md shadow-lg" @submit.prevent="authenticate">
            <h1 class="text-3xl text-purple mb-4">Login</h1>

            <div class="flex flex-col mb-2">
                <label for="username" class="mb-1 text-sm text-purple">Name</label>
                <input type="text" required class="p-2 text-gray-500 focus:outline-none" v-model="username" id="username" />
            </div>

            <div class="flex flex-col mb-2">
                <label for="password" class="mb-1 text-sm text-purple">Password</label>
                <input type="password" required class="p-2 text-gray-500 focus:outline-none" v-model="password" id="password" />
            </div>

            <button type="submit" class="login-btn mt-6 py-2 px-6 rounded-sm self-start text-sm
        text-white bg-purple duration-200 border-solid
        border-2 border-transparent hover:border-at-light-green hover:bg-white
        hover:text-at-light-green">
                Login
                
            </button>
        </form>
    </div>
</template>

<script>
import API from '../utils/api';
export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        async authenticate() {
            try {
                const result= await API.post('/login', {
                    username: this.username,
                    password: this.password
                })

                alert('Login success')

                console.log(result)

                window.localStorage.setItem('token', result.data.data)
            } catch (e) {
                alert('Login error');
            }
        }
    }
}
</script>
