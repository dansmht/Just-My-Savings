<template>
  <AppHeader />

  <main>
    <AppContainer>
      <RouterView />
    </AppContainer>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
