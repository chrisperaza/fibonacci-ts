function fibonacciCalculator(n: number): number {
  // base case
  if (n <= 2) {
    return 1;
  }
  // recursion
  else {
    return fibonacciCalculator(n - 1) + fibonacciCalculator(n - 2);
  }
}

const limit = 10;
console.log(`The first ${limit} number of Fibonacci are:`);

// print fibonacci 10 times
for (let i = 0; i <= limit; i++) {
  console.log(`Position: ${i}: ${fibonacciCalculator(i)}`);
}
