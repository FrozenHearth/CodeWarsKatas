const minValue = values => {
  const result = Number(
    Array.from(new Set(values))
      .sort()
      .join('')
  );
  return result;
};
