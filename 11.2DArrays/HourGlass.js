// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let resultArr = [];
  let count = 0;
  // processing hourglass top
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      resultArr[count] = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      count++;
    }
  }

  // processing hourglass top
  count = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      resultArr[count] += arr[i][j];
      count++;
    }
  }

  // processing hourglass top
  count = 0;
  for (let i = 2; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      resultArr[count] += arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      count++;
    }
  }
  resultArr.sort(function(a, b) {
    return b - a;
  });
  return resultArr[0];
}
arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];
console.log(hourglassSum(arr));
