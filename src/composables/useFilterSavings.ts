import type { Ref } from "vue";

import {
  removeExtraSymbols,
  removeNonDigitSymbols,
  removeSpaces,
} from "@/utils/formatString";

export const useFilterSavings = (savingsRef: Ref<string>, maxLength = 10) => {
  watch(savingsRef, (value, prevValue) => {
    let newValue = removeSpaces(value);

    if (prevValue === newValue) {
      return;
    }

    newValue = removeNonDigitSymbols(newValue);
    newValue = removeExtraSymbols(newValue, maxLength);

    savingsRef.value = newValue;
  });
};
