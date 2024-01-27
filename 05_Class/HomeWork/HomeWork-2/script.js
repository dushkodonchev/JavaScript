let arr = [2, 3, 5, 7, 8];

let firstID = document.getElementById("numberList");

let secondID = document.getElementById("sumArray");

for (let i = 0; i < arr.length; i++) {
  firstID.innerHTML += `<li>${arr[i]} <li>`;
}

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}

secondID.innerHTML += " " + sum;

// HOMEWORK PART 2
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in the HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)
