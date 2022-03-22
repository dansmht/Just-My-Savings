import type { Ref } from "vue";

import { removeMultiSpaces, removeSpaces } from "@/utils/removeSpaces";

type filterOptions = {
  letters?: boolean;
  digits?: boolean;
  spaces?: boolean;
  all?: boolean;
  max?: number;
};

export const useFilterStringRef = (
  ref: Ref<string>,
  options: filterOptions = {}
) => {
  const max = options.max ?? 20;
  let regexp: RegExp;
  let regexpStr = "";
  const finalRegexp = new RegExp(`(.{0,${max}}).*`);

  if (!options.all) {
    if (options.digits) {
      regexpStr += "0-9";
    }
    if (options.letters) {
      regexpStr += "a-zа-яё";
    }
    if (options.spaces) {
      regexpStr += "\\s";
    }
    regexp = new RegExp(`[^${regexpStr}]+`, "gi");
  }

  watch(ref, (value, prevVal) => {
    if (prevVal === removeSpaces(value)) {
      return;
    }

    let newValue = value;

    if (!options.all) {
      newValue = newValue.replace(regexp, "");
    }

    if (options.spaces) {
      newValue = removeMultiSpaces(newValue);
    }

    newValue = newValue.replace(finalRegexp, "$1");

    ref.value = newValue;
  });
};
