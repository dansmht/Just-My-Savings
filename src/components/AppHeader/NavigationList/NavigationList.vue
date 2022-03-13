<template>
  <ul class="flex flex-col items-center gap-x-8 gap-y-2 sm:flex-row">
    <li v-for="item in navLinkItems" :key="item.title">
      <RouterLink :to="item.to" custom v-slot="{ href, isActive, navigate }">
        <a
          class="flex items-center gap-2 transition-colors hover:text-slate-100 focus:text-slate-100"
          :class="`text-slate-${isActive ? '100' : '500'}`"
          :href="href"
          @click="navigate"
        >
          <div class="w-5">
            <component :is="item.icon" />
          </div>
          {{ item.title }}
        </a>
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

import MyGoalsIcon from "@/components/icons/MyGoalsIcon.vue";
import MyCardsIcon from "@/components/icons/MyCardsIcon.vue";
import SettingsIcon from "@/components/icons/SettingsIcon.vue";

import { ROUTE_PATHS } from "@/router/routes";

const navLinkItems = [
  {
    title: "My Goals",
    to: ROUTE_PATHS.myGoals,
    icon: MyGoalsIcon,
  },
  {
    title: "My Cards",
    to: ROUTE_PATHS.myCards,
    icon: MyCardsIcon,
  },
  {
    title: "Settings",
    to: ROUTE_PATHS.settings,
    icon: SettingsIcon,
  },
];
</script>
