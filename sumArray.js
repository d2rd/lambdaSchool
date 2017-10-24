/*
Sum up all of the integers in the numbers array.
Instead of returning the sum invoke cb and pass in the sum there.
*/

const numbers = [10, 20, 30];
function sumArray(numbers, cb) {
 let numbersSum = numbers.reduce((total, amount) => total + amount);
 cb = numbersSum;
 return cb;
  // try to use the array reduce method to find the sum
}
sumArray(numbers);

/*
model solution

function sumArray(numbers, cb) {
  // code here
  // try to use the array reduce method to find the sum
  const sum = numbers.reduce((runningTotal, num) => runningTotal + num);
  cb(sum);
}
*/