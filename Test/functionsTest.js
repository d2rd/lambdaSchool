const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect; 
/*
const assert = chai.assert
const { assert, expect } = require('chai') //es6 shortcut chai is the library assert/expect are methods in the library.

const expect = require('chai').expect; // preference is to use the expect method
const assert = chai').assert;
*/

const app = require('../functions'); //Looks for functions outside the test folder

//isInRange - return true if num is less than 50 and greater than 20.
describe('functions',function(){
  it('functions should return true if num is <50.', function(){
    expect(isInRange(7)).to.be.lessThan(50);
  }),

  it('functions should return true if num is >20.', function(){
      expect(isInRange(22).to.be.above(20));
    }),

  it('functions should throw error "NaN" if "num" is not a number.', function(){
    expect(isInRange('three').to.NaN);
  }),

});

//isPrime - Return true if num is prime, otherwise return false.
describe('functions',function(){
  it('functions.isPrime() should return true if num is prime.', function(){
    expect(isPrime(2).to.equal(true));
  });

  it('functions.isPrime() should throw error "NaN" if "num" is not a number.', function(){
      expect(isPrime('foo', 'this is not a number').to.equal.NaN);
    });
      
});

//isTenOrFive - 
describe('isTenOrFive', function(){  // describe is from mocha
  it('functions.isTenOrFive() should return true if num === 5', function(){
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
});


//addItemToArray - Add item to the end of arr and return the array.
describe('addItemToArray', function(){

  it('functions.addItemToArray() should return an array', function(){  //?? is this a duplicate of it#1?
    expect(addItemToArray(arr)).to.be.an(array);
  });

  it('functions.addItemToArray() should be have more elements after running than when invoked.', function(){
    expect(addItemToArray(arr).to.have.lengthOf(arr.length + 1), ___________);
  });

  it('functions.addItemToArray(arr) should throw error ___ if not an array', function(){
    expect(addItemToArray(arr), ___________);
  });

  it('functions.addItemToArray(arr) should include new element with a value of null', function(){
    expect(addItemToArray(arr).to..)
  })
  });

