<template>
  <ul>
    <li v-for="card in cards" :key="card.id">
      <CustomCard v-model:savings="card.savings" :title="card.title" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useCardsStore } from "@/stores/cards";

const { cards } = useCardsStore();
</script>
