/*These functions were written for problems from LambdaSchool Pre-Work.  Functions 1-5 (isInRange, isPrime, isTenOrFive, addItemToArray, addProperty).
*/

// bds: It looks from your checklist like you installed ESLint -- did you do the check
// bds: referenced in the install instructions to see whether it was working? This file
// bds: has many formatting issues that do not pass ESLint.

//isInRange
function isInRange(num) {
  if(typeof num !== 'number') {
    // bds: this function returns a boolean. NaN is useful when a function returns a number,
    // bds: and you want to indicate that the input does not result in a use-able number.
    // bds: In this case, it would be more sensible to return an error.
    return NaN
  }
  // bds: console.log should be removed from finished code, unless it's part of spec
  console.log(num < 50 && num > 20);
  return (num < 50 && num > 20);

}

//isPrime
function isPrime(num) {
  if(typeof num !== 'number') {
    // bds: see comment above about returning NaN when the function returns a boolean.
    return NaN;
  }

  if (num === 0 || num === 1){
    return false;
  }

  // bds: You only need to loop to num/2 here -- think about why
  // bds: challenge: try using reduce instead of an explicit for-loop
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;

  // bds: You've already checked above to see whether or not the number equals 1.
  // bds: You don't need to check again here.
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
    // bds: false isn't that helpful as a result. I would return an error here instead.
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
