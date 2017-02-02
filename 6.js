const fs = require("fs");

const MIN_NUMBER = 1;
const MAX_NUMBER = Math.pow(10, 9);

function count_greatest_common_divisor(a, b) {
  let smallest_number = a < b ? a : b;

  for (let i = smallest_number; i > 0; i--) {
    if ((a % i == 0) && (b % i == 0)) {
      return i;
    }
  }
}

function count_least_common_multiple(a, b) {
  let smallest_number = a < b ? a : b;

  for (let i = smallest_number; i <= MAX_NUMBER; i++) {
    if ((i % a == 0) && (i % b) == 0) {
      return i;
    }
  }
}

function main(a, b) {
  let numbers = [];
  let largest_number = a > b ? a : b;

  for (let x = MIN_NUMBER; x <= largest_number; x++) {
    for (let y = x; y <= largest_number; y++) {
      if (
        count_greatest_common_divisor(a, b) == count_greatest_common_divisor(x, y) &&
        count_least_common_multiple(a, b) == count_least_common_multiple(x, y)
      ) {
        numbers.push([x, y]);
      }
    }
  }

  return numbers.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]))[0];
}

let file_data = fs.readFileSync("./input.txt");
let [, a, b] = /(\d+)\s+(\d+)/.exec(fileData);

let result = main(parseInt(a), parseInt(b));

fs.writeFileSync("./output.txt", result[0] + " " + result[1]);
