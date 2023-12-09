const fs = require('fs');

const dataFetch = () => {
  try {
    const output = fs.readFileSync('advent-of-code-2023/day3/day3input.txt');
    return output;
  } catch (err) {
    throw err;
  }
};

const dataSplit = (data) => {
  const split = data.toString().split('\n');
  return split.map((str) => {
    return [...str];
  });
};

const numbers = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);

const arrayTraverse = (array) => {
  let sum = 0;
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[0].length; x++) {
      const currSymbol = array[y][x];
      if (currSymbol !== '.' && !numbers.has(currSymbol)) {
        sum += foundSym(array, x, y);
      }
    }
  }
  return sum;
};

const foundSym = (array, x, y) => {
  let sum = 0;
  // check indices around symbol for number
  if (numbers.has(array[y - 1][x])) sum += foundNum(array, x, y - 1);
  if (numbers.has(array[y - 1][x - 1])) sum += foundNum(array, x - 1, y - 1);
  if (numbers.has(array[y - 1][x + 1])) sum += foundNum(array, x + 1, y - 1);
  if (numbers.has(array[y][x - 1])) sum += foundNum(array, x - 1, y);
  if (numbers.has(array[y + 1][x - 1])) sum += foundNum(array, x - 1, y + 1);
  if (numbers.has(array[y + 1][x + 1])) sum += foundNum(array, x + 1, y + 1);
  if (numbers.has(array[y + 1][x])) sum += foundNum(array, x, y + 1);
  if (numbers.has(array[y][x + 1])) sum += foundNum(array, x + 1, y);
  // if number found, call foundNum with num indices
  return sum;
};

const foundNum = (array, x, y) => {
  const num = [];
  // back up x index until hit a period then increment to first num
  while (numbers.has(array[y][x])) {
    x--;
  }
  x++;
  // push x index onto an array until hit a period
  while (numbers.has(array[y][x])) {
    num.push(array[y][x]);
    array[y][x] = '.';
    x++;
  }
  // join the array, convert to a number, and return
  return Number(num.join(''));
};

console.log(arrayTraverse(dataSplit(dataFetch())));
