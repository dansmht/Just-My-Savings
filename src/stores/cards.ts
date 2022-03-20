import { acceptHMRUpdate, defineStore } from "pinia";

import type { Card } from "@/types/Card";

export const useCardsStore = defineStore("cards", () => {
  const cards = useLocalStorage("MY_CARDS", [] as Card[]);

  return {
    cards,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCardsStore, import.meta.hot));
