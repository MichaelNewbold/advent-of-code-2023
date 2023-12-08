const fs = require('fs');

const dataFetch = () => {
  try {
    const output = fs.readFileSync('advent-of-code-2023/day2/day2input.txt');
    return output;
  } catch (err) {
    throw err;
  }
};

const dataSplit = (data) => {
  const split = data.toString().split('\n');
  return split;
};

const maxOfGame = (game) => {
  let splitGame = game.split(':');
  let removed = splitGame.map((round) => {
    return round
      .replaceAll(' ', '')
      .replaceAll('Game', '')
      .replaceAll('reen', '')
      .replaceAll('ed', '')
      .replaceAll('lue', '');
  });
  removed = [removed[0], removed[1].split(';').join(',').split(',')];
  let validGame = true;

  const minNums = {
    r: 0,
    g: 0,
    b: 0,
  };

  removed[1].forEach((pull) => {
    const color = pull.slice(-1);
    const num = pull.slice(0, -1);
    if (num > minNums[color]) minNums[color] = num;
  });
  return minNums;
};

const multGames = (arr) => {
  let sum = 0;
  arr.forEach((game) => {
    const minNums = maxOfGame(game);
    const power = minNums[r] * minNums[g] * minNums[b];
    sum += power;
  });
  return sum;
};

console.log(multGames(dataSplit(dataFetch())));
