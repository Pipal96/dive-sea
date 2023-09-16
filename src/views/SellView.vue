<script setup lang="ts">

import AppButton from "@/components/AppButton.vue";
import AppContainer from "@/components/AppContainer.vue";
</script>

<template>
  <section class="sell-section">
    <AppContainer>
      <AppButton class="button button-upload">Upload</AppButton>
      <AppButton class="button button-create">Create</AppButton>
    </AppContainer>
  </section>
</template>

<style scoped>
.sell-section {
  padding-top: 65px;
}

.button {
  width: 100%;
}
</style>
