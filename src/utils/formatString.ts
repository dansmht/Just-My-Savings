export const removeSpaces = (value: string) => {
  return value.replace(/\s+/g, "");
};

export const removeMultiSpaces = (value: string) => {
  return value.replace(/\s+/g, " ");
};

export const removeNonDigitSymbols = (value: string) => {
  return value.replace(/[^0-9]+/g, "");
};

export const removeExtraSymbols = (value: string, maxLength: number) => {
  const regexp = new RegExp(`(.{0,${maxLength}}).*`);

  return value.replace(regexp, "$1");
};

export const addThousandSeparators = (value: number | string) => {
  let num: number;

  if (typeof value === "number") {
    num = value;
  } else {
    num = Number(value);

    if (isNaN(num)) {
      return value;
    }
  }

  return num.toLocaleString("ru").replace(/\s+/g, " ");
};
