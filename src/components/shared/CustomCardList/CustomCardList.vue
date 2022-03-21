<template>
  <ul>
    <li v-for="card in cards" :key="card.id">
      <CustomCard
        v-model:title.trim="card.title"
        v-model:savings.number="card.savings"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useCardsStore } from "@/stores/cards";

const { cards } = useCardsStore();
</script>
