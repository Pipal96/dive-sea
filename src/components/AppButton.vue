<script setup lang="ts">

</script>

<template>
  <button class="button">
    <slot/>
  </button>
</template>

<style scoped>
.button {
  border-radius: 15.195px;
  background-color: #141416;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.533;
  letter-spacing: 0.427px;
  text-transform: capitalize;
  border: none;
  padding: 18px 22px;
}
</style>
