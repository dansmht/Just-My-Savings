<template>
  <div
    class="relative flex h-40 w-72 flex-col justify-between rounded-xl bg-red-800 px-3 pt-2 pb-3"
  >
    <div class="flex items-center justify-between">
      <div class="relative w-min min-w-[1rem]">
        <span
          class="invisible whitespace-pre px-1"
          aria-hidden="true"
          v-text="cardTitle"
        />
        <input
          class="absolute left-0 w-full border-2 border-dotted border-transparent bg-inherit px-0.5 py-0 hover:border-slate-100 focus-visible:border-slate-100 focus-visible:outline-none"
          type="text"
          v-model="cardTitle"
          @change="onTitleChange"
        />
      </div>
      <div>S</div>
    </div>

    <div class="flex-grow" />

    <div class="flex items-center justify-between">
      <div class="flex translate-y-1 items-end">
        <div class="relative w-min min-w-[1rem]">
          <span
            class="invisible whitespace-pre px-1"
            aria-hidden="true"
            v-text="cardSavings"
          />
          <input
            class="absolute left-0 w-full border-2 border-dotted border-transparent bg-inherit px-0.5 py-0 hover:border-slate-100 focus-visible:border-slate-100 focus-visible:outline-none"
            type="text"
            inputmode="numeric"
            v-model="cardSavings"
            @change="onSavingsChange"
            @focus="onSavingsInputFocus"
            @blur="onSavingsInputBlur"
          />
        </div>
        <span class="text-sm">USD</span>
      </div>
      <div class="w-8 self-end"><CashIcon /></div>
    </div>

    <div
      class="absolute left-[71%] top-1/2 h-14 w-14 -translate-y-1/2 bg-black"
    >
      O
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFilterStringRef } from "@/composables/useFilterStringRef";
import { removeSpaces } from "@/utils/removeSpaces";

interface Props {
  title: string;
  savings: number;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:title", "update:savings"]);

const cardTitle = ref(props.title);
const cardSavings = ref(props.savings.toLocaleString());

useFilterStringRef(cardTitle, { all: true, max: 15 });
useFilterStringRef(cardSavings, {
  digits: true,
  spaces: true,
  max: 10,
});

const onTitleChange = () => {
  emit("update:title", cardTitle.value);
};

const onSavingsChange = () => {
  if (cardSavings.value === "") {
    cardSavings.value = "0";
  }

  emit("update:savings", cardSavings.value);
};

const onSavingsInputFocus = () => {
  cardSavings.value = removeSpaces(cardSavings.value);
};

const onSavingsInputBlur = () => {
  cardSavings.value = Number(removeSpaces(cardSavings.value)).toLocaleString();
};
</script>
