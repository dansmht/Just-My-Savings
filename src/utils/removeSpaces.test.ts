import { removeMultiSpaces, removeSpaces } from "./removeSpaces";

describe("remove spaces helpers", () => {
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
});
