// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  it("should return false if the shift amount is 0", () => {
    const input = "Michael";
    const shift = 0;
    const actual = caesar(input, shift);   
    expect(actual).to.be.false;
  });
  it("should return false if the shift amount is above 25", () => {
    const input = "Welden";
    const shift = 26;
    const actual = caesar(input, shift);   
    expect(actual).to.be.false;
  });

  it("should return false if the shift amount is less than -25", () => {
    const input = "Wemmer";
    const shift = -26;
    const actual = caesar(input, shift);   
    expect(actual).to.be.false;
  });
  it("should ignore capital letters", () => {
    const input = "Michael";
    const shift = 5;
    const actual = caesar(input, shift);
    const expected = "rnhmfjq";
    expect(actual).to.equal(expected);
  });
  it("should let the alphabet wrap back to a after passing z", () => {
    const input = "Wemmer";
    const shift = 7;
    const actual = caesar(input, shift);
    const expected = "dlttly";
    expect(actual).to.equal(expected);
  });
  it("should let spaces and special characters stay", () => {
    const input = "Yo yo?";
    const shift = 1;
    const actual = caesar(input, shift);
    const expected = "zp zp?";
    expect(actual).to.equal(expected);
  });
});