const fs = require('fs');

const dataFetch = () => {
  try {
    const output = fs.readFileSync('advent-of-code-2023/day2/day2input.txt');
    return output;
  } catch (err) {
    throw err;
  }
};