class Calculator {
  power(n, p) {
    try {
      if (n < 0 || p < 0) {
        throw "n and p should be non-negative";
      } else {
        return Math.pow(n, p);
      }
    } catch (e) {
      throw e;
    }
  }
}

let myCalc = new Calculator();
try {
  myCalc.power(-3, -2);
} catch (e) {
  console.log(e);
}
