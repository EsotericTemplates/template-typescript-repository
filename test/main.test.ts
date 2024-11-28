import { describe, it, expect } from "@jest/globals";

describe("main", () => {
  it("should run without errors", () => {
    try {
      import("../src/main");
    } catch (error) {
      console.error(error);
      expect(error).toBeUndefined();
    }
  });
});
