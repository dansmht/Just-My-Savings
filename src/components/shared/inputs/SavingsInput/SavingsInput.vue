<!--
  Transparent input with dynamic width as size of its value
  Formatting number to locale sting by adding spaces on blur
  Remove spaces on focus
  Keydown Space is prevented
  Value has a maximum length constraint
  Update modelValue by value without spaces
-->
<template>
  <div class="relative w-min min-w-[1rem]">
    <span
      class="invisible whitespace-pre px-1"
      aria-hidden="true"
      v-text="modelVal"
    />
    <input
      class="absolute left-0 w-full border-2 border-dotted border-transparent bg-inherit px-0.5 py-0 hover:border-slate-100 focus-visible:border-slate-100 focus-visible:outline-none"
      type="text"
      v-model="modelVal"
      @focus="onFocus"
      @blur="onBlur"
      @keydown.space.prevent
    />
  </div>
</template>

<script setup lang="ts">
import { useFilterSavings } from "@/composables/useFilterSavings";
import { removeSpaces } from "@/utils/formatString";

interface Props {
  modelValue: number;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const modelVal = ref(props.modelValue.toLocaleString());

useFilterSavings(modelVal);

const onFocus = () => {
  modelVal.value = removeSpaces(modelVal.value);
};

const onBlur = () => {
  emit("update:modelValue", Number(modelVal.value));

  modelVal.value = Number(modelVal.value).toLocaleString();
};
</script>
