//isInRange
function isInRange(num) {
  if(typeof num !== 'number') {
    return NaN
  }
  console.log(num < 50 && num > 20); 
  return (num < 50 && num > 20);
 
}
/*-----*/

//isPrime
function isPrime(num) {
  if(typeof num !== 'number') {
    return NaN;
  }

  if (num === 0 || num === 1){
    return false;
  }
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;

 return num !== 1;
};
/*-----*/


//isTenOrFive
  /*  Return true if num is 10 or 5.
      Otherwise return false.

      Input Example:
        5
        10
        7

      Output Example:
        true
        true
        false
  */

  function isTenOrFive(num) {
    return num === 10 || num === 5;
  };

/*-----*/

//addItemToArray
    /* Add item to the end of arr and return the array.

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
  console.log(arr.constructor, typeof arr);
  
  if(arr.constructor !== Array){  // is it's constructor not equal to the array object built-in to JS?
    return false;
  } 
  arr.push(item);
  return(arr);
};
/*-----*/

//PART 2 ADDED 10/16/2017
//addProperty

function addProperty(obj, property) {
  obj[property] = null;
  console.log(obj);
  return obj;
};
/*-----*/

//fizzBuzz
function fizzBuzz(num) {
 if (num % 3 === 0 && num % 5 === 0){ 
   console.log(fizzBuzz) // for testing
   return fizzBuzz ;
} else if (num % 3 === 0){
   console.log('fizz') // for testing
  return 'fizz' ;
} else  if (num % 5 === 0){
   console.log('buzz') // for testing
  return 'buzz' ;
} else return num ;
};
/*-----*/

//nameProps
/*
 Write a function nameProps(obj) that returns the names of the properties an object has in alphabetical order. Ignore symbolic properties and count only the "own properties" (not inherited) of the object.
*/

    // attribution:  https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key
function nameProps(obj){
    keys = Object.keys(obj), // extracts keys from object to new array 'keys'
    console.log(keys);
    return keys.sort();
    // console.log(keys);
}
    // // to return an object with sorted keys use the line below.
    // i, len = keys.length;  // declares empty variable 'i' and declares 2nd var 'len' and assigns value of length of 'keys' array.

  //choose one:
      // keys.sort().forEach(key => console.log(key));  // ES6 syntax
     // keys.sort().forEach(function(key){console.log(key)});
//   // console.log(keys);
//   // Display keys from 'obj' in the console
//   for(var key in obj){
//     if(obj.hasOwnProperty(key)) {
//       console.log(key);
//     }
//   }


//   for (i = 0; i < length; i++) {
//     k = keys[i];
//     console.log(k + ':' + Obj[k]);
//   };
// }
/*-----*/

//showMonth
/* 
Write a function month(date) to find the month for a given Date object, returning the name of the month as a string ('January', 'February', 'March', 'April', 'May', ... etc).
*/
const calendar = [
    {monthNumber: 1,
    monthName  : "January"},
    {monthNumber: 2,
    monthName  : "February"},
    {monthNumber: 3,
    monthName  : "March"},
    {monthNumber: 4,
    monthName  : "April"},
    {monthNumber: 5,
    monthName  : "May"},
    {monthNumber: 6,
    monthName  : "June"},
    {monthNumber: 7,
    monthName  : "July"},
    {monthNumber: 8,
    monthName  : "August"},
    {monthNumber: 9,
    monthName  : "September"},
    {monthNumber: 10,
    monthName  : "October"},
    {monthNumber: 11,
    monthName  : "November"},
    {monthNumber: 12,
    monthName  : "December"}
  ]

function showMonth(date){
  // let dateInput = prompt("Please enter a date","mm/dd/yyyy");
    let dateInput = process.argv[2];
    console.log(dateInput);

  //split dateInput into array.
    dateInputArray = dateInput.split("/");
    console.log(dateInputArray);

  //extract month digits from dateInput
    let getMonth = function (dateInputArray) { 
    if (dateInputArray[0] >= 1 || dateInputArray[0] <= 12) {
    console.log('the month is ' + getMonth);
          return console.log('this is a valid month');
      }
      else {
          return false;
      }
    };


  //match dateInput to monthNumber.
  
  for (i in calendar){
      console.log(i);
      for (key in calendar[i]){
        if(key !== 'company' && key !== 'no_employees' && key !== 'phone' && key !== 'created_at') { // filters out unwanted keys.  NOTE: Must use '&&'!  '||' ("OR" operator) does not work in JS 'if'.  This is NOT SQL.
        //Prints the id, rep_name, city, and state of each matching client.
          console.log( key + ": " + calendar[i][key]);
        }
      }
  }
}

//addFriend
const user = [
  {
    name    : "Samuel", 
    friends :[]
  },
  {
    name    : "Ralph", 
    friends : []
  },
  {
    name    : "Annie",
    friends : []
  }
];
function addFriend(user, newFriend)  {
  let i = '';
	for (let i = 0; i < userObj.length; i++){
		if ( userObj[i].name === user ) {
				userObj[i].friends.push(newFriend)
		}
	}
	return userObj[i];
};
/* move to functionsTest
//tests
addFriend("Samuel","Ralph");
addFriend('Annie','Ralph');
userObj;
*/
/*-----*/

/* 
TASKS
  [ ] Cleanup old code from added functions (addProperty, fizzBuzz, nameProps, showMonth)
  [ ]
  [ ]
  [ ]
  [ ]
  [ ]
  [ ]
  [ ]
  [ ]
  [ ]
*/

module.exports = {isInRange, isPrime, isTenOrFive, addItemToArray, addProperty, fizzBuzz, nameProps, showMonth, addFriend}

