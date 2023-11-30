const { mergeSort } = require('./main3.js');
module.exports = { mergeSort, breakdownArr };

function breakdownArr(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const FirstPartArr = arr.slice(0, middle);
  const SecondPartArr = arr.slice(middle);

  return mergeSort(breakdownArr(FirstPartArr), breakdownArr(SecondPartArr));
}

module.exports = { breakdownArr };
