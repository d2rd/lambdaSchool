const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
/*
const assert = chai.assert
const { assert, expect } = require('chai') //es6 shortcut chai is the library assert/expect are methods in the library.

const expect = require('chai').expect; // preference is to use the expect method
const assert = chai').assert;
*/

    /* 
    bds: did you run these tests? When I ran them, I got zero passing.
    gdd: Yes, just before push.  It was the end of the day deadline, hence my comment "needs debugging".
    */

const app = require('../functions'); //declares 'app' asLooks for functions outside the test folder

//isInRange - return true if num is less than 50 and greater than 20.
    /* 
    bds: the string argument for describe should be a specific description for this set of tests. 'app.isInRange' would be a better descriptor here than 'functions'
    */
describe('app.isInRange',function(){
  it('isInRange should return true if num is <50.', function(){
    /*
     bds: here, you need to reference your import use app.isInRange, rather than isInRange.
     Also, you need to test the output of the function. What data type
     does isInRange return? What data type are you comparing the output to here?
    */
    expect(app.isInRange(7)).to.be.lessThan(50);
  }),

  it('isInRange should return true if num is >20.', function(){
    expect(app.isInRange(22)).to.be.above(20);
    }),

  it('isInRange should throw error "NaN" if "num" is not a number.', function(){
    expect(app.isInRange(num).to.be.NaN)

    /* 
      bds: nice to test unexpected input. However, this is not how chai works for detecting when error are thrown. Try googling "chai expect to throw error"
    */
    expect.isNumber(app.isInRange('three'))._.isNumber(value);
  }),



//isPrime - Return true if num is prime, otherwise return false.
describe('isPrime returns true if num is prime, otherwise return false.',function(){
  it('isPrime should return true if num is prime.', function(){
    /*
     bds: watch your parentheses here. You want to make sure the expect value parens are closed before the .to expect(app.isPrime(2)).to.equal(true)
     */
    expect(isPrime(2)).to.equal(true);
  });

  it('isPrime should throw error "NaN" if "num" is not a number.', function(){
      expect(isPrime('foo', 'this is not a number')).to.equal.NaN;
    });

//isTenOrFive -
// bds: better use of the describe string here to categorize the tests
describe('isTenOrFive', function(){  // describe is from mocha

  // bds: the string argument here doesn't need functions.isTenOrFive(), since
  // bds: that's in the describe. Use 'should return true if num === 5' instead
  it('isTenOrFive should return true if num === 5', function(){

    // bds: I believe this test would work if you used "app.isTenOrFive" instead of "isTenOrFive"
    expect(app.isTenOrFive(5)).to.equal(true); //assertion from chai
  });

  it('isTenOrFive should throw error if num !=== 5', function(){
    expect(app.isTenOrFive(7)).to.equal(false);
  });

  it('isTenOrFive should return true if num === 10', function(){
    expect(app.isTenOrFive(10)).to.equal(true);
  });

  it('isTenOrFive should throw error if num !=== 10', function(){
    expect(app.isTenOrFive(15)).to.equal(false);
  });

  // bds: unexpected input?
});


//addItemToArray - Add item to the end of arr and return the array.
describe('addItemToArray adds an element to the end of "arr" then returns the array.', function(){

  it('addItemToArray should return an array', function(){  //?? is this a duplicate of it#1?
    expect(addItemToArray(arr,'this object is not an array')).to.be.an(array);
  });

  it('addItemToArray should be have more elements after running than when invoked.', function(){
    /* 
      bds: this is a good thing to test; however, because arr gets changed in the course of running the function, you'll have to store the value of arr.length before running the function, to have it available to compare to after running the function.
    */
    expect(app.addItemToArray(arr)).to.have.lengthOf(arr.length + 1);
});

  it('addItemToArray should throw error "this object is not an array" if not an array', function(){
    expect(app.addItemToArray(arr,'this object is not an array')).to.be.an(array);
  });

  // it('addItemToArray should add the item 'apple' to the array ['coconut', 'peach', 'kiwi'] updated array should be ['coconut', 'peach', 'kiwi', 'apple']);')

  // it('addItemToArray should add the item 'boat' to the array ['car', 'truck', 'motorcycle'] updated array should be ['car', 'truck', 'motorcycle', 'boat']);')

/* 
  bds: I see these tests are not complete -- I won't comment on the incomplete tests. :-)
*/

  it('addItemToArray should include new element with a value of "null"', function(){
    // expect(app.addItemToArray(arr)).to..)
    expect(app.addItemToArray(arr[arr.length + 1]), 'expected new element to be null.').toBeNull(); //expect added element to be null. 
    //?? figure out syntax to pass new element key as parameter to specifically navigate to it.
  });

/*
  MODEL  https://facebook.github.io/jest/docs/en/expect.html#tobenull
    function bloop() {
      return null;
    }

    test('bloop returns null', () => {
      expect(bloop()).toBeNull();
    });
*/

/* TASKS
1.  [x] replace 'functions' module references with 'app'
2.  [x] parens are closed before the '.to'

3.  [ ] addItemToArray:  
3a.    [x] for 'it' statements: replace references to 'functions' with target function name (i.e. 'it('addItemToArray...' instead of 'it(functions...').  
 b.   [x] store the value of arr.length before running the function.
 c.   [x] complete test for 'value of null' see comments in functions.js
 d.   [x] add error message if object type is not an array.
 e.   [x] remove test command invoking function from finished work.
 f.   [ ] add new element 'apple' to test array ['coconut', 'peach', 'kiwi']
 g.   [ ] add new element 'boat' to test array ['car', 'truck', 'motorcycle']  

4.  [ ] isInRange:
 a.   [x] for 'expect(' statements reference module import by using 'app.isInRange', rather than 'isInRange'.
 b.   [x] for 'it' statements: replace references to 'functions' with target function names (i.e. 'it('isInRange...' instead of 'it(functions...').   
 c.   [ ] correct syntax for 'throw error "NaN" if "num" is not a number.'

5.  [ ] isTenOrFive:
 a.   [x] in 'expect(...' add 'app.' prefix to function names.
 b.   [ ] add test for unexpected input.

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
  mustard seed church, san jose