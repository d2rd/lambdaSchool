// Sum all of the odd numbers together between 1 and num inclusive.
// Assume num is a positive integer.

    // Input Example:

    // 5
    // 15
    // 2

    // Output Example:

    // 9 // 5 + 3 + 1
    // 64 // 15 + 13 + 11 + 9 + 7 + 5 + 3 + 1
    // 1 // 1

// 1.  What is main purpose of the function? 
// Answer: To add up all the odd numbers from 1 to the input of 'num'.  
// 2.  How would you accomplish adding this with code?  
// Answer: for loop that returns a variable that you name, such as "sum".  
// 3.  How would you check each value of 'i' so that you only add the ODD numbers, and exclude the evens? 
// 3a.  How can you check to see if a number is odd.. or not odd... because we do have the option of != (not equal)
// 4.  What should I do to "sum" if the result of the 'if' statement is true?


// [5:55]  
// what you are doing is iterating over a starting point "i" to num by counting from 1 to num via the for loop.  Any number that is odd between 1 and num should be added to a variable "sum" or whatever you choose to name it.

function sumOfOdds(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if(i % 2 !== 0) sum += i;
  }
  return sum;
}
sumOfOdds(9);

//By using 'i % 3 === 0' Below code will fail the test. While 'i % 2 !== 0' passes. Why?
// function sumOfOdds(num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     if(i % 3 === 0) sum += i;
//   }
//   return sum;
// }
// sumOfOdds(9);