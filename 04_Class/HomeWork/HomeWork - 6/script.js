function combineNames(firstNames, lastNames) {
  let fullNames = [];

  for (let i = 0; i < firstNameArr.length; i++) {
    let numericValue = i + 1;
    // console.log(numericValue);

    let fullName = `${numericValue}. ${firstNameArr[i]} ${lastNameArr[i]}`;

    fullNames.push(fullName);
  }
  return fullNames;
}

let firstNameArr = ["Bob", "Jill", "Mat"];
let lastNameArr = ["Gregory", "Wurtz", "Demon"];
console.log(combineNames(firstNameArr, lastNameArr));

// HOMEWORK #6
// Title: Looping structures

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]
