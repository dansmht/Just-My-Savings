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

import AppHeader from "@/components/AppHeader/AppHeader.vue";
import AppContainer from "@/components/shared/AppContainer/AppContainer.vue";
</script>
