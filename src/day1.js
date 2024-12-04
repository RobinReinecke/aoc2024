import { readFileSync } from "fs";

const data = readFileSync("data/day1.txt", "utf-8");
const lines = data.split("\n");
const listA = [];
const listB = [];
for (const line of lines) {
  const lineItems = line.split(" ");
  listA.push(lineItems[0]);
  listB.push(lineItems[3]);
}
listA.sort((a, b) => a - b);
listB.sort((a, b) => a - b);
let distance = 0;
for (let i = 0; i < listA.length; i++) {
  distance += Math.abs(listA[i] - listB[i]);
}
console.log("Part 1: ", distance);

const frequency = (arr, item) => {
  return arr.filter((x) => x === item).length;
};

let similarity = 0;

for (let i = 0; i < listA.length; i++) {
  similarity += frequency(listB, listA[i]) * listA[i];
}

console.log("Part 2: ", similarity);
