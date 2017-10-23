
//isInRange

function isInRange(num) {
  if(typeof num !== 'number') {
    return NaN
  }
  console.log(num < 50 && num > 20); 
  return (num < 50 && num > 20);
};

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

  /*   bds:  it's not necessary to compare the number to 1 here; you've already returned false if the number is 1 from the first conditional in this function. It would suffice to return true here.
  */
  return num !== 1;
};
 
function isTenOrFive(num) {
  return num === 10 || num === 5;
};

//addItemToArray
function addItemToArray(arr, item) {
  console.log(arr.constructor, typeof arr);
 
    if(arr.constructor !== Array){  // is it's constructor not equal to the array object built-in to JS?
    return false;
  } 
  arr.push(item);
  return(arr);
};

//addProperty
function addProperty(obj, property) {
  obj[property] = null;
  console.log(obj);
  return obj;
};

module.exports = {isInRange, isPrime, isTenOrFive, addItemToArray, addProperty}


/* TASKS
  [x] install eslint
  [x] remove run commands from functions.js
  [x] remove test statements from functions.js
  [x] isInRange:  replace the whole conditional (if-then-else) with returning the boolean expression: "return (num < 50 && num > 20)" 
  [x] isInRange: remove function call 
  [x] remove all bds comments
  [x] remove all 'note to self' comments
  
*/