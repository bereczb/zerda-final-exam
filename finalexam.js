// Create a function that takes a string and a letter, than returns a list that contains all the indexes where the letter occured in the string.

'use strict';

const stringToFindIn = 'qwertyqwe';
const letterToFind = 'e';

function indexesOfLetter (inputString, inputLetter) {

  var result = [];

  for (let i = 0; i < inputString.length; i++){
    if (inputString[i] === inputLetter) {
      result[result.length] = i;
    }
  }
  return result
}

console.log(indexesOfLetter(stringToFindIn, letterToFind));
