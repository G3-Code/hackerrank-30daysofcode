function processData(input) {
  //Enter your code here
  let inputData = input.split("\n");
  var people = {};

  var peopleLen = parseInt(inputData[0]);
  for (let i = 0; i < peopleLen; i++) {
    people[inputData[i + 1].split(" ")[0]] = inputData[i + 1].split(" ")[1];
  }

  //   console.log(people);

  for (let i = parseInt(inputData[0]) + 1; i < inputData.length; i++) {
    console.log(
      people.hasOwnProperty(inputData[i])
        ? inputData[i] + "=" + people[inputData[i]]
        : "Not found"
    );
  }
}

processData(
  "3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry\nleela\nram"
);
