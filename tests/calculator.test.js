import { subtract, divide, multiply } from "../calculator.js";

describe("basic operations", () => {
  describe("multiply operations", () => {
    test("First test subtract", () => expect(subtract(15, 10)).toBe(5));
    test("Subtract second number is negative", () =>
      expect(subtract(15, -2)).toBe(17));
    test("Subtract first number is negative", () =>
      expect(subtract(-10, 20)).toBe(-30));
    test("Subtract two negative numbers", () =>
      expect(subtract(-10, -10)).toBe(0));
    test("Subtract with 0", () => expect(subtract(15, 0)).toBe(15));
  });

  describe("multiply operations", () => {
    test("First test multiply", () => expect(multiply(5, 10)).toBe(50));
    test("Multiply with -2", () => expect(multiply(5, -2)).toBe(-10));
    test("Multiply with 0", () => expect(multiply(5, 0)).toBe(0));
  });

  describe("divide operations", () => {
    test("First test divide", () => expect(divide(8, 2)).toBe(4));
    test("Divide with -2", () => expect(divide(8, -2)).toBe(-4));
    test("Divide 0", () => expect(divide(0, 2)).toBe(0));
    test("Divide with 0", () => expect(divide(8, 0)).toMatch("infinity"));
  });
});