function BinaryNumber(n) {
  let quotient = Math.floor(n / 2);
  let remainder = n % 2;
  if (n <= 1) {
    return 1;
  } else {
    return BinaryNumber(quotient) + remainder.toString();
  }
}

let binaryVal = BinaryNumber(439);
console.log(binaryVal);

let binaryValArr = binaryVal.split("");
let newArr = [];
let count = 0;
for (let i = 0; i < binaryValArr.length; i++) {
  //   console.log(binaryValArr[i]);
  if (binaryValArr[i] === "1") {
    count++;
    console.log(count);
  } else {
    if (count) {
      newArr.push(count);
      count = 0;
    }
  }
}
if (count) {
  newArr.push(count);
}
newArr.sort(function(a, b) {
  return b - a;
});
console.log(newArr[0]);
