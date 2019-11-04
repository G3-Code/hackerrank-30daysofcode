function processData(input) {
  //Enter your code here

  let words = input.split("\n");
  let numberOfWords = parseInt(words[0]);
  //console.log(words);
  for (let i = 0; i < numberOfWords; i++) {
    if (i === numberOfWords - 1) {
      process.stdout.write(stringSplit(words[i + 1]));
    } else {
      process.stdout.write(stringSplit(words[i + 1]) + "\n");
    }
  }
}

function stringSplit(word) {
  let wordLen = word.length;
  let oddStr = word.substr(1, 1);
  let evenStr = word.substr(0, 1);
  for (let i = 2; i < wordLen; i++) {
    if (i % 2 === 0) {
      evenStr = evenStr.concat(word.substr(i, 1));
    } else {
      oddStr = oddStr.concat(word.substr(i, 1));
    }
  }
  return evenStr.concat(" ").concat(oddStr);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
