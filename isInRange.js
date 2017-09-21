//
// function isInRange(num) {
// if (num < 50 && num > 20) {
//   return "true";
// } else {
//   return("not in range");
// }
// }
// isInRange(44);

function isInRange(num) {
if (num < 50 && num > 20) {
  return(true);
} else {
  return(false);
}
}
isInRange(44);

// model solution
function isInRange(num) {
  return num < 50 && num > 20;
}
isInRange(44);