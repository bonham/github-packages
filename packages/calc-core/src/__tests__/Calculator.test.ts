import { describe, it, expect } from "vitest";
import { Calculator } from "../Calculator.js";

describe("Calculator", () => {
  const calc = new Calculator();

  it("should add two numbers", () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  it("should subtract two numbers", () => {
    expect(calc.subtract(5, 3)).toBe(2);
  });

  it("should multiply two numbers", () => {
    expect(calc.multiply(4, 5)).toBe(20);
  });

  it("should divide two numbers", () => {
    expect(calc.divide(10, 2)).toBe(5);
  });

  it("should throw error on division by zero", () => {
    expect(() => calc.divide(10, 0)).toThrow("Division by zero");
  });
});
