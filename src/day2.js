import { readFileSync } from "fs";

const data = readFileSync("data/day2.txt", "utf-8");
const lines = data.split("\n");
const reports = [];
for (const line of lines) {
  const reportItems = line.split(" ");
  reports.push(reportItems);
}

function isSafe(report) {
  const gaps = [];
  for (let i = 0; i < report.length - 1; i++) {
    gaps.push(report[i] - report[i + 1]);
  }

  return (
    (Math.max(...gaps) <= 3 && Math.min(...gaps) >= 1) ||
    (Math.max(...gaps) <= -1 && Math.min(...gaps) >= -3)
  );
}

function isSafeWithTolerance(report) {
  for (let i = 0; i < report.length; i++) {
    const reportOneRemoved = [];
    for (let j = 0; j < report.length; j++) {
      if (i == j) {
        continue;
      }
      reportOneRemoved.push(report[j]);
    }
    if (isSafe(reportOneRemoved)) {
      return true;
    }
  }
  return false;
}

console.log("Part 1: ", reports.filter(isSafe).length);
console.log("Part 2: ", reports.filter(isSafeWithTolerance).length);
