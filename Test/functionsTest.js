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

//isPrime - Return true if num is prime, otherwise return false.
describe('isPrime returns true if num is prime, otherwise return false.',function(){
  it('isPrime should return true if num is prime.', function(){

    expect(app.isPrime(2)).to.be.true;
  });

  it('isPrime should throw error "NaN" if "num" is not a number.', function(){
      expect(app.isPrime('foo', 'this is not a number')).to.be.NaN;
    });
});

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


//fizzBuzz
  /*
    fizzBuzz(21);
    fizzBuzz(6);
    fizzBuzz(10);
    fizzBuzz(15);
    fizzBuzz(7);
  */


//nameProps
// Write a function nameProps(obj) that returns the names of the properties an object has in alphabetical order. Ignore symbolic properties and count only the "own properties" (not inherited) of the object.


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

  */
