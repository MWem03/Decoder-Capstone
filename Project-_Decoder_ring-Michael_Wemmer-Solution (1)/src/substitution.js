// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
       if(!alphabet){
      return false
    }

    let alphabetArray = alphabet.split("")
    if(alphabetArray.length !== 26) {
      return false
    }

    for(let i = 0; i < alphabet.length; i++) {
      if(alphabet.split(alphabet[i]).length > 2) {
        return false
      }
    }

    const lookUp = "abcdefghijklmnopqrstuvwxyz"

    let result = ""
    let inputLowered = input.toLowerCase()

    if(encode){
      for(let i = 0; i < inputLowered.length; i++) {
        let iPosition = lookUp.indexOf(inputLowered[i])
        if(inputLowered[i] === " "){
          result += " "
        } else {
          result += alphabet[iPosition]
        }
      }
    } else {
 for(let i = 0; i < inputLowered.length; i++) {
   let iPosition = alphabet.indexOf(inputLowered[i])
   if(inputLowered[i] === " "){
    result += " "
  } else {
    result += lookUp[iPosition]
  }
 }
}
return result
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
