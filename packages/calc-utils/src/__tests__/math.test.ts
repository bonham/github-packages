import { describe, it, expect } from "vitest";
import { sum, average, factorial } from "../math.js";

describe("Math utilities", () => {
  it("should sum an array of numbers", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  it("should calculate average", () => {
    expect(average([2, 4, 6])).toBe(4);
  });

  it("should throw error for average of empty array", () => {
    expect(() => average([])).toThrow("Cannot calculate average of empty array");
  });

  it("should calculate factorial", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
  });

  it("should throw error for negative factorial", () => {
    expect(() => factorial(-1)).toThrow("Factorial not defined for negative numbers");
  });
});
