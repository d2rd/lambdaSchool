

function contains(arr,item){
  for(let i=0;i< arr.length;i++) {
  if (arr[i] === item) {return true}
}
  return false;
} 

//model solution
/*
function contains(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return true;
  }
  return false;
  
    You could also just do this:
    return arr.includes(item);
    
    .includes is a newer method in JS.
    Sometimes you'll also see people use .indexOf 
    as a way to search through an array.
  
}
*/