const duplicateCount = text => {
  if (text === '') {
    return 0;
  }
  const result = text
    .toLowerCase()
    .split('')
    .map(el => el);
  let counts = {};
  const final = result.map(x => {
    counts[x] = (counts[x] || 0) + 1;
    return counts;
  });
  const keys = Object.entries(final[0])
    .filter(([, v]) => v > 1)
    .map(([k]) => k).length;

  return keys;
};
