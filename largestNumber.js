// numbers is an array of integers.  Find and return the largest integer.

    // Input Example:

    // [1, 2, 3, 4, 5]
    // [100, 0, -100]
    // [5, 5, 5]

    // Output Example:

    // 5
    // 100
    // 5

function largestNumber(numbers) {
  return Math.max.apply(null, numbers);
}

let numbers = [100, 260, 44, -44];
largestNumber(numbers);