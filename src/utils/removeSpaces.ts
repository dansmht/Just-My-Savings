export const removeSpaces = (value: string) => {
  return value.replace(/\s+/g, "");
};

export const removeMultiSpaces = (value: string) => {
  return value.replace(/\s+/g, " ");
};
