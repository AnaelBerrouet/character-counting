function countLetters(inputStr) {
  var output = {};

  inputStr = inputStr.split(" ").join('').split(""); //get rid of spaces and make it into and array

  inputStr.forEach( function(element){
      if (element in output) {
        output[element]++;
      } else {
        output[element] = 1;
      }
  });
  return output;
}

console.log(countLetters("lighthouse in the house"));