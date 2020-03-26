const filter_list = l => {
  // Return a new array with the strings filtered out
  const filteredList = l.filter(el => typeof el !== 'string');
  return filteredList;
};

// filter_list([1,2,'a','b']);
