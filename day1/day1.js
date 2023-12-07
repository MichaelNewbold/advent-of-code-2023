const fs = require('fs');

const dataFetch = () => {
  try {
    const output = fs.readFileSync('advent-of-code-2023/day1/day1input.txt');
    return output;
  } catch (err) {
    throw err;
  }
};

const dataSplit = (data) => {
  const split = data.split('\n');
  console.log(split);
};

const firstAndLast = (string) => {
  let num;
  let last;
  let first;
  const set = new Set(['1', '2', 3, 4, 5, 6, 7, 8, 9, 0]);
  for (let i = 0; i < string.length; i++) {
    if (set.has(string[i])) console.log(string[i]);
  }
};

