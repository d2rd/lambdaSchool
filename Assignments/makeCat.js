//This version works
  // function makeCat(name) {
  //  const meow = {
  //    name: name,
  //    meow: function() {
  //      console.log(`${this.name} meowed!` );
  //    }
  //  };
  //  meow.meow();
  // }
  // makeCat('Mingus');
  // passes test with 'Mingus'


 
const catFacts = [{
  name: 'Mingus The Cat',
  age: 3,
  meow: function() {
    console.log(name + ' meowed!');
}
}];
function makeCat(name) {
  catFacts.name = name;
  return name + " meowed!";
}
makeCat('Mingus');



// Works but fails test
 
function makeCat(name) {
  this.name = name;

  return name + " meowed!";
}
makeCat("Mingus The Cat");

// From Lambda School Prep Lesson 4
const catFacts =[{
  name: 'Mingus The Cat',
  age: 3,
  meow: function() {
    console.log(name + ' meowed!')
}
}]