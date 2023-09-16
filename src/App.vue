<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">sell</RouterLink>
    </nav>
  </header>

  <RouterView/>

  <footer>

  </footer>
</template>

<style scoped>
</style>
