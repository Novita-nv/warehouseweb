<template>
  <header class="flex justify-between items-center absolute top-0 left-0 w-full bg-dark-purple p-4">
    <div>
    <!-- <button class="home-btn text-center text-white p-4" @click="$router.push('/')">
      Home
    </button> -->

    <button class="menu-btn text-center text-white p-4" @click="$router.push('/dashboard')">
      Menu
    </button>
    </div>
    <button type="button" class="logout-btn text-center py-1 px-4
              text-black bg-light-purple duration-200 border-solid
              border-4 border-transparent hover:border-at-light-purple hover:bg-white
              hover:text-at-light-purple" @click="$router.push('/home')">
      Logout
    </button>
  </header>
</template>

<script>
export default {
  setup() {
    // Get user from store

    // Setup ref to router

    // Logout function

    return {};
  },
};
</script>
