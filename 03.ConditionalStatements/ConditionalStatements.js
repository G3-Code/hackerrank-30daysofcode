"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function operator(n) {
  if (n % 2 !== 0) {
    console.log("Weird");
  } else if (n > 20) {
    console.log("Not Weird");
  } else if (n > 5 && n < 21) {
    console.log("Weird");
  } else if (n > 1 && n < 6) {
    console.log("Not Weird");
  }
}

function main() {
  const N = parseInt(readLine(), 10);
  operator(N);
}
