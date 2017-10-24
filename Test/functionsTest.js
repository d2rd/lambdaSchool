const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;

const app = require('../functions'); //declares 'app' asLooks for functions outside the test folder


describe('isInRange return true if num is less than 50 and greater than 20.',function(){
  it('isInRange should return false if num is >50.', function(){
    expect(app.isInRange(7)).to.be.false;
  }),

  it('isInRange should return true if num is >20.', function(){
    expect(app.isInRange(22)).to.be.true;
    }),

  it('isInRange should throw error "NaN" if "num" is not a number.', function(){
    expect(app.isInRange('name')).to.be.NaN
  });
});
/*-----*/

//isPrime - Return true if num is prime, otherwise return false.
describe('isPrime returns true if num is prime, otherwise return false.',function(){
  it('isPrime should return true if num is prime.', function(){

    expect(app.isPrime(2)).to.be.true;
  });

  it('isPrime should throw error "NaN" if "num" is not a number.', function(){
      expect(app.isPrime('foo', 'this is not a number')).to.be.NaN;
    });
});
/*-----*/

//isTenOrFive -
describe('isTenOrFive', function(){  // describe is from mocha
  it('isTenOrFive should return true if num === 5', function(){
    expect(app.isTenOrFive(5)).to.be.true; //assertion from chai
  });

  it('isTenOrFive should throw error if num !=== 5', function(){
    expect(app.isTenOrFive(7)).to.be.false;
  });

  it('isTenOrFive should return true if num === 10', function(){
    expect(app.isTenOrFive(10)).to.be.true;
  });

  it('isTenOrFive should throw error if num !=== 10', function(){
    expect(app.isTenOrFive(15)).to.be.false;
  });

});
/*-----*/

//addItemToArray - Add item to the end of arr and return the array.
describe('addItemToArray adds an element to the end of "arr" then returns the array.', function(){
  const arr = ['coconut', 'peach', 'kiwi']; 
  it('addItemToArray should return an array', function(){  
    expect(app.addItemToArray("junkString",'apple'),'this is not an array').to.be.false;
  });

  it('addItemToArray should have more elements after running than when invoked.', function(){
    let objLength = arr.length;  // store length of input array for later comparison.  Originally put this statement in functions.js which was misguided.
    expect(app.addItemToArray(arr,'apple')).to.have.lengthOf(objLength + 1);
  });

});
/*-----*/

//PART 2 ADDED 10/16/2017

//addProperty
describe('addProperty adds a new property to "obj".  The new property should have a value of null.', function(){
  
  let obj = {
    brand : "Fender",
    stringCount : 4,
    color : "Blue"
};
  
it('addProperty should have more properties after running than when invoked.', function(){
    
    let objLength = obj.length;  // store length of input array for later comparison.  Originally put this statement in functions.js which was misguided.
    expect(app.addProperty(obj,'dollarValue')).to.have.lengthOf(objLength + 1);
  });

it('addProperty should have a length equal to original length + 1', function(){  
    expect(app.addProperty(obj,'dollarValue')).to.be.false;
  });
});  
/*-----*/

// sumArray
/*
Sum up all of the integers in the numbers array.
Instead of returning the sum invoke cb and pass in the sum there.
*/
describe('sumArray sums up all of the integers in the numbers array, invokes callback and passes in the sum as an callback argument.', function(){
  //declared objects/arrays
  const numbers = [10, 20, 30];

  //tests to be executed

  it('sumArray [test criteria]', function(){
      expect(app.sumArray([argumentToPass])).to.be.[expectedOutcome];
    }),

  it('sumArray [test criteria]', function(){
      expect(app.sumArray([argumentToPass])).to.be.[expectedOutcome];
    }),
});

function sumArray(numbers, cb) {
 let numbersSum = numbers.reduce((total, amount) => total + amount);
 cb = numbersSum;
 return cb;
  // try to use the array reduce method to find the sum
}
// sumArray(numbers);
/*-----*/


//fizzBuzz
describe('fizBuzz')
    fizzBuzz(21);
    fizzBuzz(6);
    fizzBuzz(10);
    fizzBuzz(15);
    fizzBuzz(7);
  

/*-----*/

//nameProps
// Write a function nameProps(obj) that returns the names of the properties an object has in alphabetical order. Ignore symbolic properties and count only the "own properties" (not inherited) of the object.
describe('nameProps returns the names of the properties an object has in alphabetical order.')
it()
describe('[functionName] [what it does]', function(){
  //declared objects/arrays
    const obj = {
    "id": 1,
    "rep_name": "Xymenes Dewer",
    "email": "xymenes.dewer@somewhere.com",
    "company": "Beahan, Swift and Hoppe",
    "no_employees": 742,
    "phone": "1-(863)994-6147",
    "fax": "1-(555)123-4567",
    "city": "Lakeland",
    "state": "Florida",
    "created_at": "11/4/2003"
  };

  //tests to be executed

  it('[functionName] [test criteria]', function(){
      expect(app.[functionName]([argumentToPass])).to.be.[expectedOutcome];
    }),

  it('[functionName] [test criteria]', function(){
      expect(app.[functionName]([argumentToPass])).to.be.[expectedOutcome];
    })
});
/*-----*/
//showMonth
describe('showMonth find the month for a given Date object, returning the name of the month as a string ("January, "February", "March"... etc).', function(){
  //declare objects/arrays
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

  //tests to be executed
  it('showMonth should throw an error if the input argument is not a valid date', "Input is not a valid date.  Should be: Date(YYYY, MM, DD)", function(){
      expect(app.showMonth((6/5/1953))).to.be.undefined;
  }),

  it('showMonth should throw an error if the input argument is not a valid date', "Input is not a valid date.  Should be: Date(YYYY, MM, DD)", function(){
        expect(app.showMonth(Date(6/5/1953))).to.be.undefined;
    }),

  it('showMonth should throw an error if the input argument is not a valid date', "Input is not a valid date.  Should be: Date(YYYY, MM, DD)", function(){
      expect(app.showMonth('bogusDate')).to.be.undefined;
  }),
  
  it('showMonth should display the name of the month associated with integer for that calendar month', function(){
      expect(app.showMonth(Date(1953, 6, 5))).to.be("June");
  }),

  it('showMonth should display the name of the month associated with integer for that calendar month', function(){
      expect(app.showMonth(Date(2010, 10, 5))).to.be("October");
  })
});
/*-----*/

//addFriend
describe('addFriend [what it does]', function(){
  //declared objects/arrays
    let userObj = [
      {
        'name'    :'Samuel', 
        'friends' :[]
      },
      {
        'name'    : 'Ralph', 
        'friends' : []
      },
      {
        'name'    : 'Annie',
        'friends' : []
      }
    ]; 

  //tests to be executed
  it('addFriend should add the value "Ralph" to the object whose "name" key has a value of "Samuel"', function(){
      expect(app.addFriend({name: 'Samuel'})).to.own.include({friends: "Ralph"});
    }),

  it('addFriend should add the value "Ralph" to the object whose "name" key has a value of "Annie"', "WRONG SYNTAX use both keys", function(){
        expect(app.addFriend({name: 'Annie'})).to.own.include({friends: "Ralph"});
      }),

  it('addFriend should add the value "Ralph" to the object whose "name" key has a value of "Annie"',"both keys not required?", function(){
        expect(app.addFriend({name: 'Annie', friends: 'Ralph'})).to.own.include({friends: "Ralph"});
      })
});

/* TASKS
1.  [x] replace 'functions' module references with 'app'
2.  [x] parens are closed before the '.to'

3.  [x] addItemToArray:  
3a.   [x] for 'it' statements: replace references to 'functions' with target function name (i.e. 'it('addItemToArray...' instead of 'it(functions...').  
 b.   [x] store the value of arr.length before running the function.
 c.   [x] complete test for 'value of null' see comments in functions.js
 d.   [x] add error message if object type is not an array.
 e.   [x] remove test command invoking function from finished work.
 f.   [x] add new element 'apple' to test array ['coconut', 'peach', 'kiwi']
 
4.  [x] isInRange:
 a.   [x] for 'expect(' statements reference module import by using 'app.isInRange', rather than 'isInRange'.
 b.   [x] for 'it' statements: replace references to 'functions' with target function names (i.e. 'it('isInRange...' instead of 'it(functions...').   
 c.   [x] correct syntax for 'throw error "NaN" if "num" is not a number.'

5.  [x] isTenOrFive:
 a.   [x] in 'expect(...' add 'app.' prefix to function names.
 b.   [x] add test for unexpected input.

//PART 2 ADDED 10/??/2017
  [ ] Write tests for addProperty
  [ ] Write tests for fizzBuzz
  [ ] Write tests for nameProps
  [x] Write tests for showMonth
  [x] Write tests for addFriend
 
 
  */

  //bds comments here
  /*

  */
