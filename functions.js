// using approach from this video tutorial 
// this method encapsulates all the code in this file 
// within module.exports = { }


//isInRange
function isInRange(num) {
if (num < 50 && num > 20) {
  return(true);
} else {
  return(false);
}
}
isInRange(44);



//isPrime
function isPrime(num) {
  if (num === 0 || num === 1){
    return false;
  }
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}
  // console.log(isprime(37));
  //tests

//isTenOrFive
    // Return true if num is 10 or 5.
    // Otherwise return false.

    // Input Example:

    // 5
    // 10
    // 7

    // Output Example:

    // true
    // true
    // false


function isTenOrFive(num) {
  console.log(num === 5 || num === 10); //for test results
  return (num === 5 || num === 10);
}

//tests
isTenOrFive(10);
isTenOrFive(22);
isTenOrFive(5);
isTenOrFive(10);

// model solution
function isTenOrFive(num) {
  return num === 10 || num === 5;
}

//addItemToArray
    // Add item to the end of arr and return the array.

    // Input Example:

    // [1, 2, 3], 4
    // [true], false
    // ['Hello'], 'world!'

    // Output Example:

    // [1, 2, 3, 4]
    // [true, false]
    // ['Hello', 'world!']


function addItemToArray(arr, item) {
  arr.push(item);
  return(arr);
}
addItemToArray(['coconut', 'peach', 'kiwi'], 'apple');



module.exports = {isInRange, isPrime, isTenOrFive, addItemToArray}
