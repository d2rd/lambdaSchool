// numbers is an array of integers.  Add all of the integers together and return the sum.

// Input Example:

  // [1, 2, 3, 4, 5]
  // [0, 0, 0, 1]
  // []

// Output Example:

  // 15
  // 1
  // 0


function addNumbers(numbers) {
var s = 0;
for(var i=0; i < numbers.length; i++)
    s += numbers[i];
    return s;
}

