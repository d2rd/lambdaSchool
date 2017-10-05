// Return the length of arr.  The length is also the count of items in the array.

// Input Example:

// [1, 2, 3]
// ['a', 'b', 'c', 'd', 'e']
// []

// Output Example:

// 3
// 5
// 0


function addItemToFront(arr, item) {
  arr.unshift(item);
  return(arr);
}
addItemToFront([1, 2, 3], 22);