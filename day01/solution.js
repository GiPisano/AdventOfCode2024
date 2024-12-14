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

// Ordina le liste in ordine crescente
leftList.sort(function (a, b) {
  return a - b;
});

rightList.sort(function (a, b) {
  return a - b;
});

// Calcola la distanza totale
let totDistance = 0;

for (let i = 0; i < leftList.length; i++) {
  totDistance += Math.abs(leftList[i] - rightList[i]);
}

console.log(totDistance);
