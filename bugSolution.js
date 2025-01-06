function foo(a, b) {
  return Number.isNaN(a) && Number.isNaN(b) || a === b; 
}

console.log(foo(NaN, NaN)); // Output: true
console.log(foo(1,1)); // Output: true
console.log(foo(1,2)); //Output: false