function foo(a, b) {
  // Check if both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    // Handle non-numeric inputs, you might want to throw an error or return a default value
    return NaN; // Or throw an error: throw new Error('Inputs must be numbers');
  }

  return a + b; // Add the numbers
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: NaN
console.log(foo(1, null)); // Output: NaN
console.log(foo(null, null)); // Output: NaN
console.log(foo(1, '2')); // Output: NaN