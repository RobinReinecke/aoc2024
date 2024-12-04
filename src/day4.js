import { readFileSync } from "fs";

const data = readFileSync("data/day4.txt", "utf-8");
let lines = data.split("\n");
const charLineArray = [];
for (const line of lines) {
  const characters = line.split("");
  charLineArray.push(characters);
}

const searchWord = "XMAS";
const searchWordReversed = "SAMX";

function buildHorizontalLines(array) {
  const result = [];
  for (let i = 0; i < array[0].length; i++) {
    let horizontalLine = "";
    for (let j = 0; j < array.length; j++) {
      horizontalLine += array[j][i];
    }
    result.push(horizontalLine);
  }
  return result;
}
function buildDiagonalLines(array) {
  const result = [];
  const lineLength = array[0].length;
  for (let i = 0; i < lineLength; i++) {
    let diagonalLine = "";
    for (let j = 0; j < array.length; j++) {
      if (i + j == lineLength) {
        break;
      }
      diagonalLine += array[j][i + j];
    }
    result.push(diagonalLine);
  }

  for (let i = 0; i < array.length; i++) {
    let diagonalLine = "";
    for (let j = 0; j < lineLength; j++) {
      if (i + j == array.length) {
        break;
      }
      diagonalLine += array[i + j][j];
    }
    result.push(diagonalLine);
  }

  for (let i = lineLength - 1; i >= 0; i--) {
    let diagonalLine = "";
    for (let j = 0; j < array.length; j++) {
      if (i - j < 0) {
        break;
      }
      diagonalLine += array[j][i - j];
    }
    result.push(diagonalLine);
  }

  for (let i = 0; i < array.length; i++) {
    let diagonalLine = "";
    for (let j = 0; j < lineLength; j++) {
      if (i + j == array.length) {
        break;
      }
      diagonalLine += array[i + j][lineLength - 1 - j];
    }
    result.push(diagonalLine);
  }

  return result;
}

lines = lines.concat(buildDiagonalLines(charLineArray));
lines = lines.concat(buildHorizontalLines(charLineArray));
lines = [...new Set(lines)];

let occurrences = 0;
for (const line of lines) {
  occurrences += (line.match(new RegExp(searchWord, "g")) || []).length;
  occurrences += (line.match(new RegExp(searchWordReversed, "g")) || []).length;
}
console.log("part 1: ", occurrences);