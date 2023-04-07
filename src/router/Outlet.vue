<template>
  <!-- component -->

  <nav
    class="flex dark:bg-slate-900 items-center relative justify-around bg-slate-200 px-5 py-6 w-full"
  >
    <div>
      <p class="font-bold text-2xl">
        <router-link to="/">Home</router-link>
      </p>
    </div>
    <ul
      id="drawer"
      role="menu"
      class="sm:gap-3 transition-left ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] delay-150 sm:flex flex flex-col cursor-pointer absolute min-h-screen -left-48 sm:static w-48 top-0 bg-white sm:shadow-none shadow-xl sm:bg-transparent sm:flex-row sm:w-auto sm:min-h-0 dark:bg-slate-900"
    >
      <router-link :to="{ name: 'AddContact' }">
        <li
          class="font-medium text-sm p-3 hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-primary"
        >
          <a href="#" class="dark:text-white">Add Contact</a>
        </li>
      </router-link>
      <li
        class="font-medium text-sm p-3 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-gray-600 hover:text-primary transition-colors"
      >
        <a href="#" class="dark:text-white">Women</a>
      </li>
      <!-- <li
        class="font-medium text-sm p-3 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-gray-600 hover:text-primary transition-colors"
      >
        <a href="#" class="dark:text-white">Kids</a>
      </li> -->
    </ul>
  </nav>
  <router-view />
</template>

<script>
export default {};
</script>

<style>
</style>