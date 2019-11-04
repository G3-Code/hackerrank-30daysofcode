function BinaryNumber(n) {
  let quotient = Math.floor(n / 2);
  let remainder = n % 2;
  if (n <= 1) {
    return 1;
  } else {
    return BinaryNumber(quotient) + remainder.toString();
  }
}

console.log(BinaryNumber(10));
