// Add item to the end of arr and return the array.

// Input Example:

// [1, 2, 3], 4
// [true], false
// ['Hello'], 'world!'

// Output Example:

// [1, 2, 3, 4]
// [true, false]
// ['Hello', 'world!']


function addItemToArray(arr, item) {
  arr.push(item);
  return(arr);
}
addItemToArray(['coconut', 'peach', 'kiwi'], 'apple');

