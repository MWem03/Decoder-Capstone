// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let lookUp = "abcdefghijklmnopqrstuvwxyz"

  function caesar(input, shift, encode = true) {
    // your solution code here
    let result = ""
    if(shift === 0 || shift >25 || shift < -25){
      return false
    } else {
      if (encode == false) {
        shift = 0 - shift
      }
      for(let i = 0; i < input.length; i++){
        const eachLetterLower = input[i].toLowerCase()
        if(lookUp.includes(eachLetterLower)) {
          let shiftedIndex = lookUp.indexOf(eachLetterLower) + shift
          if(shiftedIndex > 25){
            const shiftTooBig =lookUp.indexOf(eachLetterLower) + shift
            shiftedIndex = shiftTooBig - 26
          }
          if(shiftedIndex < 0) {
            const shiftTooSmall = lookUp.indexOf(eachLetterLower) + shift
            shiftedIndex = shiftTooSmall + 26
          }
          result += lookUp.charAt(shiftedIndex)
        } else {
          result += eachLetterLower
        }
      }
      return result
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
