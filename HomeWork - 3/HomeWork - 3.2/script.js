let humanAge = parseInt(prompt("What is your age?"));

function calculateDogAge(humanAge) {
  let result = humanAge * 7;
  console.log(`Your dog is ${result} years old`);
  return result;
}

calculateDogAge(humanAge);

let dogAge = parseInt(prompt("What is your dog age?"));

function calculateHumanAge(dogAge) {
  let result = dogAge / 7;
  console.log(`You are ${result} years old`);
  return result;
}

calculateHumanAge(dogAge);

// HOMEWORK PART 2
// Write a JavaScript function that will return:

// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well
