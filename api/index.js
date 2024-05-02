const getSum = (num1, num2) => {
  if (typeof num === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  }
  return 'Invalid input';
};

const getMax = (arr) => {
  let max = arr[0];

  for (num of arr) {
    if (typeof num === 'string') {
      return 'Invalid input';
    }
    if (num > max) {
      max = num;
    }
  }
  return max;
};
const calculate = (num, arr) => {
  const maxOfArray = getMax(arr);
  return getSum(num, maxOfArray);
};

module.exports = { getSum, getMax, calculate };
