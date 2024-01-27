function findMinMax(array) {
  let maxValue;
  let minValue;
  let firstNumber = arr[0];

  // console.log(firstNumber);

  for (let i = 1; i <= arr.length; i++) {
    // console.log(arr[i])

    if (firstNumber < arr[i]) {
      minValue = firstNumber;
      console.log(`Minimum value of the array is ${minValue}`);
    }

    if (arr[i] > firstNumber) {
      maxValue = arr[i];

      console.log(`Maximum value of the array is ${maxValue}`);
    }
  }
  let sum = minValue + maxValue;
  console.log(`Sum of the min and max value is: ${sum}`);
}
let arr = [3, 5, 6, 8, 15];
console.log(findMinMax(arr));

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14
