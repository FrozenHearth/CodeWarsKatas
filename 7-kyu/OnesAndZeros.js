const convertToBinary = n => {
  return parseInt(n, 2);
};

const binaryArrayToNumber = arr => {
  let result = convertToBinary(parseInt(arr.join('')));
  return result;
};
