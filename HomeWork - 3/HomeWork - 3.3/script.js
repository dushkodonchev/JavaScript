let currentMoney = parseInt(prompt("How mouch money do you have?"));
let moneyOut = parseInt(prompt("How much money would you like to take out?"));

function get_money_from_ATM() {
  let currentCondition = currentMoney - moneyOut;

  console.log(
    `You took out ${moneyOut}$ and you currently have ${currentCondition}$ in your bank account.`
  );

  let moneyOut_2 = parseInt(prompt("Would like to take more money out?"));

  if (currentCondition >= moneyOut_2) {
    let result = currentCondition - moneyOut_2;
    console.log(
      `You took ${moneyOut_2}$ out and you have left ${result}$ in your bank account.`
    );
  } else if (moneyOut_2 > currentCondition) {
    console.log("Not enough money!");
  } else {
    console.log("Invalid value");
  }
}
get_money_from_ATM();

// HOMEWORK PART 3
// Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!
