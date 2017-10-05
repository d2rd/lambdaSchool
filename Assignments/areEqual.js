function areEqual(x, y) {
if (x === y){
    console.log("true")
  }
else {
   console.log("false")
}
}
areEqual(22, 21); 

areEqual(22, 45);   //Evaluates 'false' in Repl.
areEqual(22, 22);  //Evaluates 'true' in Repl.

//NOTE: works in Repl but fails your test when submitted.

// DOES NOT WORK
function areEqual(x, y) {
 if (x == y) {
  return("true");
} else { return("false")
}
}
areEqual(20, 22);
// areEqual(10, 10);