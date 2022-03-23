<template>
  <div
    class="relative flex h-40 w-72 flex-col justify-between rounded-xl bg-red-800 px-3 pt-2 pb-3"
  >
    <div class="flex items-center justify-between">
      <span>
        {{ title }}
      </span>

      <div>S</div>
    </div>

    <div class="flex-grow" />

    <div class="flex items-center justify-between">
      <div class="flex translate-y-1 items-end">
        <SavingsInput v-model="cardSavings" />

        <span class="text-sm">USD</span>
      </div>
      <div class="w-8 self-end">
        <CashIcon />
      </div>
    </div>

    <div
      class="absolute left-[71%] top-1/2 h-14 w-14 -translate-y-1/2 bg-black"
    >
      O
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  savings: number;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:savings"]);

const cardSavings = ref(props.savings);

watch(cardSavings, (value) => {
  emit("update:savings", value);
});
</script>
