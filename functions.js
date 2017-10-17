/*These functions were written for problems from LambdaSchool Pre-Work.  Functions 1-5 (isInRange, isPrime, isTenOrFive, addItemToArray, addProperty).  
*/
//isInRange
function isInRange(num) {
  if(typeof num !== 'number') {
    return NaN
  }
  console.log(num < 50 && num > 20); 
  return (num < 50 && num > 20);
 
}

//isPrime
function isPrime(num) {
  if(typeof num !== 'number') {
    return NaN;
  }

  if (num === 0 || num === 1){
    return false;
  }
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;

  return num !== 1;
};

//isTenOrFive
function isTenOrFive(num) {
  return num === 10 || num === 5;
};

//addItemToArray
/* 
Add item to the end of arr and return the array.

    Input Example:

    [1, 2, 3], 4
    [true], false
    ['Hello'], 'world!'

    Output Example:

    [1, 2, 3, 4]
    [true, false]
    ['Hello', 'world!']
*/

function addItemToArray(arr, item) {
  console.log(arr.constructor, typeof arr); // checks for type of array (suggested by Serafin)

    if(arr.constructor !== Array){  // is it's constructor not equal to the array object built-in to JS?
    return false;
  } 
  arr.push(item);
  return(arr);
};

module.exports = {isInRange, isPrime, isTenOrFive, addItemToArray}


/* TASKS
  [x] install eslint
  [x] remove run commands from functions.js
  [x] remove test statements from functions.js
  [x] isInRange:  replace the whole conditional (if-then-else) with returning the boolean expression: "return (num < 50 && num > 20)" 
  [x] isInRange: remove function call 
  [x] remove all bds comments
  [x] remove all 'note to self' comments
*/