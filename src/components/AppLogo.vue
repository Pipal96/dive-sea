<script setup lang="ts">

import IconLogo from "@/components/icons/IconLogo.vue";
</script>

<template>
  <div class="logo">
    <IconLogo/>
    <p class="text">DiveSea</p>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  column-gap: 7px;

  & .text {
    color: #000;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.3;
    margin: 0;
  }
}
</style>
