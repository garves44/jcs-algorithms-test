const numbers = [
  41,
  24,
  28,
  1,
  40,
  41,
  32,
  33,
  50,
  5,
  34,
  5,
  21,
  21,
  43,
  43,
  21,
  4,
  49,
  24,
];

const mostDuplicates = (arr) => {
  let mostValue;
  let mostCount;

  for (let i = 0; i < arr.length; i++) {
    let counter = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        counter++;
      }
    }

    if (counter > mostCount) {
      mostCount = counter;
      mostValue = arr[i];
    }
    return `${mostValue} appeared ${mostCount} times! `;
  }
};

const optimizedDuplicates = (arr) => {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (map[value] === undefined) {
      map[value] = 1;
    } else {
      map[value]++;
    }
    let mostValue;
    let mostCount = 0;
  }
};

module.exports = { mostDuplicates };
