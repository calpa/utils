import * as fc from "fast-check";
import reverseString from "./reverseString";

describe("reverseString", () => {
  it("should reverse the string", () => {
    fc.assert(
      fc.property(fc.string(), (s) => {
        expect(reverseString(s)).toEqual(s.split("").reverse().join(""));
      })
    );
  });

  it("should return an empty string for an empty input", () => {
    expect(reverseString("")).toEqual("");
  });
});
