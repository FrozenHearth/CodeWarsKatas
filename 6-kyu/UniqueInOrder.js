const uniqueInOrder = iterable => {
  let finalArr = [];
  let result = [];
  if (iterable === iterable.toString()) {
    result = iterable.split('');
  } else {
    result = iterable;
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== result[i - 1]) {
      finalArr.push(result[i]);
    }
  }
  return finalArr;
};
