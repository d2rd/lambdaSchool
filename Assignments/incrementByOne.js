/*
Instructions from your teacher:
arr is an array of integers.  Increment each integer in the array and return the same array.

Input Example:

[1, 2, 3]
[0, 0, -1]
[]

Output Example:

[2, 3, 4]
[1, 1, 0]
[]
*/

function incrementByOne(arr){
  for (var i = 0; i < arr.length; i++){
    arr[i] += 1;
  }
  return arr;
}
/*test
incrementByOne([10,20,30,40,50]);
// output
[ 11, 21, 31, 41, 51 ]
*/



/*
let arr = [10,20,30,40,50];
function incrementByOne(arr) {
  arr = arr.map(function(arr){return ++arr;});

}
console.log(arr);

//works but doesn't pass
let arr = [10,20,30,40,50];
arr = arr.map(function(val){return ++val;});
console.log(arr);
*/