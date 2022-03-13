<template>
  <header class="mb-4 border-b border-slate-700 py-4 sm:h-16">
    <AppContainer>
      <div class="flex w-full items-center justify-between">
        <div class="w-12 self-start">
          <img
            class="pointer-events-none select-none"
            src="@/assets/images/logo.svg"
            alt="Logo"
            draggable="false"
          />
        </div>

        <NavigationList />
      </div>
    </AppContainer>
  </header>
</template>

<script setup lang="ts">
import AppContainer from "@/components/shared/AppContainer/AppContainer.vue";
import NavigationList from "@/components/AppHeader/NavigationList/NavigationList.vue";
</script>
