const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8");

const lines = input.trim().split("\n");

let leftList = [];
let rightList = [];

for (let i = 0; i < lines.length; i++) {
  const numbers = lines[i].split("   ");

  leftList.push(parseInt(numbers[0]));
  rightList.push(parseInt(numbers[1]));
}

let similarityScore = 0;

for (let i = 0; i < leftList.length; i++) {
  let LeftNum = leftList[i];
  let countInRightList = 0;

  for (let j = 0; j < rightList.length; j++) {
    if (rightList[j] === LeftNum) {
      countInRightList++;
    }
  }
  similarityScore += LeftNum * countInRightList;
}

console.log(similarityScore);
