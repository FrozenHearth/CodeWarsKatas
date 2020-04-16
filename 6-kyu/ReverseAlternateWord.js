const reverse = str => {
  const result = str
    .trim()
    .split(' ')
    .map((el, index) => {
      if (index % 2 !== 0) {
        return el
          .split('')
          .reverse()
          .join('');
      } else {
        return el;
      }
    })
    .join(' ');
  return result;
};
