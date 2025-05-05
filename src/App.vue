<script setup>
import HelloImVirginia from './components/HelloImVirginia.vue'
</script>

<template>
  <!-- <div class="flex justify-center">
    <a href="https://vite.dev" target="_blank">
      <img src="/viryrocket.png" class="logo" alt="Vir y Rocket" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/viryperro.png" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <HelloImVirginia />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 1em #f1ffa0) drop-shadow(0 0 2em #00a89d);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 1em #05f4a8) drop-shadow(0 0 2em #05f4a8);
}
</style>
