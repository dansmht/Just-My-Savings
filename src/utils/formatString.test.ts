import {
  addThousandSeparators,
  removeExtraSymbols,
  removeMultiSpaces,
  removeNonDigitSymbols,
  removeSpaces,
} from "./formatString";

describe("format string helpers", () => {
  describe("removeSpaces", () => {
    it("should remove spaces", () => {
      expect(removeSpaces("Test")).toBe("Test");
      expect(removeSpaces(" T e s t ")).toBe("Test");
      expect(removeSpaces("  T e  s t  ")).toBe("Test");
      expect(removeSpaces("Te st")).toBe("Test");
      expect(removeSpaces("Te   st")).toBe("Test");
    });
  });

  describe("removeMultiSpaces", () => {
    it("should remove multi spaces", () => {
      expect(removeMultiSpaces("Test")).toBe("Test");
      expect(removeMultiSpaces(" T e s t ")).toBe(" T e s t ");
      expect(removeMultiSpaces("  T e  s t  ")).toBe(" T e s t ");
      expect(removeMultiSpaces("Te st")).toBe("Te st");
      expect(removeMultiSpaces("Te   st")).toBe("Te st");
    });
  });

  describe("removeNonDigitSymbols", () => {
    it("should remove non-digital symbols", () => {
      expect(removeNonDigitSymbols("Test123!@#$%^&*()-=")).toBe("123");
      expect(removeNonDigitSymbols("  1 2   3$")).toBe("123");
      expect(removeNonDigitSymbols("019")).toBe("019");
    });
  });

  describe("removeExtraSymbols", () => {
    it("should remove extra symbols", () => {
      expect(removeExtraSymbols("Test", 0)).toBe("");
      expect(removeExtraSymbols("Test String", 6)).toBe("Test S");
      expect(removeExtraSymbols("123456", 6)).toBe("123456");
      expect(removeExtraSymbols("1", 6)).toBe("1");
      expect(removeExtraSymbols("   ", 6)).toBe("   ");
      expect(removeExtraSymbols("", 6)).toBe("");
      expect(removeExtraSymbols("Test", -6)).toBe("Test");
      expect(removeExtraSymbols("Test", 6.6)).toBe("Test");
      expect(removeExtraSymbols("Test", -6.6)).toBe("Test");
    });
  });

  describe("addThousandSeparators", () => {
    it("should add thousand separators to number and string that could be converted to number", () => {
      expect(addThousandSeparators(0)).toBe("0");
      expect(addThousandSeparators(1234)).toBe("1 234");
      expect(addThousandSeparators("1234567890")).toBe("1 234 567 890");
      expect(addThousandSeparators("   1234567890   ")).toBe("1 234 567 890");
      expect(addThousandSeparators(1234.1235)).toBe("1 234,124");
      expect(addThousandSeparators("1234.1234")).toBe("1 234,123");
      expect(addThousandSeparators(-1000)).toBe("-1 000");
      expect(addThousandSeparators("Test")).toBe("Test");
      expect(addThousandSeparators(1e3)).toBe("1 000");
      expect(addThousandSeparators("1e3")).toBe("1 000");
    });
  });
});
