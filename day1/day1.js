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
      let r;
      
    }
  }
  num = Number(first.concat(last));
  return num;
};

const result = () => {
  const data = dataFetch();
  const dataArr = dataSplit(data);
  const numsArr = dataArr.map(firstAndLast);
  const sum = numsArr.reduce((acc, curr) => {
    return acc + curr;
  });
  return sum;
};

console.log(result());
