Exercise - 3;

function bigString(arrayOfStrings) {
  let total = "";
  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (i < arrayOfStrings.length + 1) {
      total = total + arrayOfStrings[i];
      total += " ";
    }
  }
  return total;
}

let arr = ["Hello", "there", "students", "of", "SEDC", "!"];

console.log(bigString(arr));

// HOMEWORK #3
// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"
