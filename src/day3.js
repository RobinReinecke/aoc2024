import { readFileSync } from "fs";

const data = readFileSync("data/day3.txt", "utf-8");

const matches = data.match(/mul\(\d+,\d+\)/gm);

let sum = 0;

function multiply(string) {
  const numbers = [...string.matchAll(/(\d+),(\d+)/gm)][0];
  return numbers[1] * numbers[2];
}
for (const match of matches) {
  sum += multiply(match);
}

console.log("Part 1: ", sum);

const matchesWithInstructions = data.match(
  /mul\(\d+,\d+\)|(do\(\))|(don't\(\))/gm
);

let process = true;
let sum2 = 0;

for (const match of matchesWithInstructions) {
  if (match == "do()") {
    process = true;
    continue;
  }
  if (match == "don't()") {
    process = false;
    continue;
  }
  if (!process) {
    continue;
  }
  sum2 += multiply(match);
}
console.log("Part 2: ", sum2);
