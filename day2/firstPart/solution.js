const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8");

const lines = input.trim().split("\n");

let safeReports = 0;

for (let i = 0; i < lines.length; i++) {
  let arrayOfNums = lines[i].split(" ").map(Number);

  let isIncreasing = true;
  let isDecreasing = true;
  let isValidDifference = true;

  for (let j = 0; j < arrayOfNums.length - 1; j++) {
    let diff = Math.abs(arrayOfNums[j] - arrayOfNums[j + 1]);

    if (diff < 1 || diff > 3) {
      isValidDifference = false;
      break;
    }

    if (arrayOfNums[j] < arrayOfNums[j + 1]) {
      isDecreasing = false;
    } else if (arrayOfNums[j] > arrayOfNums[j + 1]) {
      isIncreasing = false;
    }
  }

  if (isValidDifference && (isIncreasing || isDecreasing)) {
    safeReports++;
  }
}
console.log(safeReports);
