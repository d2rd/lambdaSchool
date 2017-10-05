function nfactorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}


// model
// function nFactorial (num) {
//   let factorial = 1;
//   for (let i = 1; i <= num; i++) {
//     factorial *= i;
//   }
//   return factorial;
// }