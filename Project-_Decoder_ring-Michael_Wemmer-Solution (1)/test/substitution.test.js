// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    const input = "Thinkful";
    const alphabet = "abcdefghijklmnop";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });

  it("should return false if the substitution alphabet does not contain unique characters", () => {
    const input = "Thinkful";
    const alphabet = "abbccdefghizywvutsrqponmlj";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });

    it("should encode a message using the substitution alphabet", () => {
      const input = "Thinkful";
      const alphabet = "zyxwvutsrqponmlkjihgfedcba";
      const actual = substitution(input, alphabet);
      const expected = "gsrmpufo";

      expect(actual).to.equal(expected);
    });

    it("should decode a message using the substitution alphabet", () => {
        const input = "gsrmpufo";
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const actual = substitution(input, alphabet, false);
        const expected = "thinkful";
  
        expect(actual).to.equal(expected);
      });

      it("should ignore spaces while encoding", () => {
        const input = "Studying at Thinkful";
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const actual = substitution(input, alphabet);
        const expected = "hgfwbrmt zg gsrmpufo";
  
        expect(actual).to.equal(expected);
      });

      it("should ignore spaces while decoding", () => {
        const input = "hgfwbrmt zg gsrmpufo";
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const actual = substitution(input, alphabet, false);
        const expected = "studying at thinkful";
  
        expect(actual).to.equal(expected);
      });
});
