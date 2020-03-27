const factorial = n => {
  // Calculate the factorial here
  if (n === 0 || n === 1) {
    return 1;
  }
  if (n < 0 || n > 12) {
    throw new RangeError('Range must be between 0 and 12');
  } else {
    return n * factorial(n - 1);
  }
};
