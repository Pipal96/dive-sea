<script setup lang="ts">

import {RouterLink} from "vue-router";
import AppContainer from "@/components/AppContainer.vue";
import AppLogo from "@/components/AppLogo.vue";
</script>

<template>
  <header class="header">
    <AppContainer>
      <div class="wrapper">
        <AppLogo/>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/sell">sell</RouterLink>
        </nav>
      </div>
      <hr class="hr">
    </AppContainer>
  </header>
</template>

<style scoped>
.header {
  & .wrapper {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 38px;
  }

  & .hr {
    margin: 0;
    border: none;
    border-bottom: solid 1px #CBCBCB;
  }
}
</style>
