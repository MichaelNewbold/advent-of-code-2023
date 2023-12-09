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
  const split = data.toString().split('\n');
  return split;
};

const firstAndLast = (string) => {
  let num;
  let last;
  let first;
  const set = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
  const letters = {
    o: ['one'],
    t: ['two', 'three'],
    f: ['four', 'five'],
    s: ['six', 'seven'],
    e: ['eight'],
    n: ['nine'],
    z: ['zero'],
  };
  for (let i = 0; i < string.length; i++) {
    if (set.has(string[i])) {
      if (first === undefined) {
        first = string[i];
      }
      last = string[i];
    } else if (letters[string[i]]) {
      const l = string[i];
      for (let j = 0; j < letters[l].length; j++) {
        for (let k = 0; k < letters[l][j].length; k++) {
          if (string[i + k] !== letters[l][j][k]) break;
          if (k === letters[l][j].length - 1) {
            if (first === undefined) first = string.slice(i, i + k + 1);
            last = string.slice(i, i + k + 1);
            i = i + k - 1;
          }
        }
      }
    }
  }
  const strToNum = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  first = strToNum.hasOwnProperty(first) ? strToNum[first] : first;
  last = strToNum.hasOwnProperty(last) ? strToNum[last] : last;
  num = Number('' + first + last);
  return num;
};

const result = () => {
  const data = dataFetch();
  const dataArr = dataSplit(data);
  const numsArr = dataArr.map(firstAndLast);
  const sum = numsArr.reduce((acc, curr, idx) => {
    return acc + curr;
  }, 0);
  return sum;
};

console.log(result());
