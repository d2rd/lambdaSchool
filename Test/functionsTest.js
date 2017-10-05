const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
/*
const assert = chai.assert
const { assert, expect } = require('chai') //es6 shortcut chai is the library assert/expect are methods in the library.

const expect = require('chai').expect; // preference is to use the expect method
const assert = chai').assert;
*/

// bds: did you run these tests? When I ran them, I got zero passing

const app = require('../functions'); //Looks for functions outside the test folder

//isInRange - return true if num is less than 50 and greater than 20.
// bds: the string argument for describe should be a specific description for
// bds: this set of tests. 'isInRange' would be a better descriptor here than
// bds: 'functions'
describe('functions',function(){
  it('functions should return true if num is <50.', function(){
    // bds: here, you need to reference your import
    // bds: use app.isInRange, rather than isInRange

    // bds: Also, you need to test the output of the function. What data type
    // bds: does isInRange return? What data type are you comparing the output to here?
    expect(isInRange(7)).to.be.lessThan(50);
  }),

  it('functions should return true if num is >20.', function(){
      expect(isInRange(22).to.be.above(20));
    }),

  it('functions should throw error "NaN" if "num" is not a number.', function(){

    // bds: nice to test unexpected input. However, this is not how chai works
    // bds: for detecting when error are thrown. Try googling "chai expect to throw error"
    expect(isInRange('three').to.NaN);
  }),



//isPrime - Return true if num is prime, otherwise return false.
describe('functions',function(){
  it('functions.isPrime() should return true if num is prime.', function(){
    // bds: watch your parentheses here. You want to make sure the expect value
    // bds: parens are closed before the .to
    // bds: expect(app.isPrime(2)).to.equal(true)
    expect(isPrime(2).to.equal(true));
  });

  it('functions.isPrime() should throw error "NaN" if "num" is not a number.', function(){
      expect(isPrime('foo', 'this is not a number').to.equal.NaN);
    });

});

//isTenOrFive -
// bds: better use of the describe string here to categorize the tests
describe('isTenOrFive', function(){  // describe is from mocha

  // bds: the string argument here doesn't need functions.isTenOrFive(), since
  // bds: that's in the describe. Use 'should return true if num === 5' instead
  it('functions.isTenOrFive() should return true if num === 5', function(){

    // bds: I believe this test would work if you used "app.isTenOrFive" instead
    // bds: of "isTenOrFive"
    expect(isTenOrFive(5)).to.equal(true); //assertion from chai
  });

  it('functions.isTenOrFive() should throw error if num !=== 5', function(){
    expect(isTenOrFive(7)).to.equal(false);
  });

  it('functions.isTenOrFive() should return true if num === 10', function(){
    expect(isTenOrFive(10)).to.equal(true);
  });

  it('functions.isTenOrFive() should throw error if num !=== 10', function(){
    expect(isTenOrFive(15)).to.equal(false);
  });

  // bds: unexpected input?
});


//addItemToArray - Add item to the end of arr and return the array.
describe('addItemToArray', function(){

  it('functions.addItemToArray() should return an array', function(){  //?? is this a duplicate of it#1?
    expect(addItemToArray(arr)).to.be.an(array);
  });

  it('functions.addItemToArray() should be have more elements after running than when invoked.', function(){
    // bds: this is a good thing to test; however, because arr gets changed in
    // bds: the course of running the function, you'll have to store the value
    // bds: of arr.length before running the function, to have it available to
    // bds: compare to after running the function.
    expect(addItemToArray(arr).to.have.lengthOf(arr.length + 1), ___________);
  });

  it('functions.addItemToArray(arr) should throw error ___ if not an array', function(){
    expect(addItemToArray(arr), ___________);
  });

  // bds: I see these tests are not complete -- I won't comment on the incomplete
  // bds tests. :-)

  // it('functions.addItemToArray(arr) should include new element with a value of null', function(){
  //   expect(addItemToArray(arr).to..)
  // })
  });
})
