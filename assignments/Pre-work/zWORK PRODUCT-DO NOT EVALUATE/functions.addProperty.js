/*
addProperty
CODE


function addProperty(obj, property) {
  obj[property] = null;
  console.log(obj);
  return obj;
}




TEST
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

*/