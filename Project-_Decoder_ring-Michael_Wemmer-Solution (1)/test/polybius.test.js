// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
it("should turn i and j into 42 while encoding", () => {
    const input = "hijack";
    const actual = polybius(input);
    const expected = "324242113152";
    expect(actual).to.equal(expected);
  });

  it("should turn 42 into i and j while decoding", () => {
    const input = "324242113152";
    const actual = polybius(input, false);
    expect(actual).to.include("i");
    expect(actual).to.include("j");
  });

  it("should ignore capital letters", () => {
    const input = "Michael";
    const actual = polybius(input);
    const expected = "23423132115113";
    expect(actual).to.equal(expected);
  });

  it("should leave spaces and special characters alone in the string while encoding", () => {
    const input = "what's up";
    const actual = polybius(input);
    const expected = "25321144'34 5453";
    expect(actual).to.eql(expected);
  });

  it("should leave spaces alone in the string while decoding", () => {
    const input = "3243254145 454354";
    const actual = polybius(input, false);
    const expected = "howdy you";
    expect(actual).to.equal(expected);
  });
});