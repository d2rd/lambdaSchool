function areSameLength(str1, str2) {
  if (str1.length == str2.length){
    console.log("true")
  }
else {
   console.log("false")
}
}

// areSameLength("this string is longer than that string", "that string is short");   //Evaluates 'false' in Repl.
areSameLength("this string", "that string");  //Evaluates 'true' in Repl.

//NOTE: works in Repl but fails your test when submitted.