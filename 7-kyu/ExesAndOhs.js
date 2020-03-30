const XO = str => {
  //code here
  const output = str.split('');
  const xNumbers = output.filter(el => el.toLowerCase() === 'x').length;
  const oNumbers = output.filter(el => el.toLowerCase() === 'o').length;

  if (xNumbers === oNumbers) {
    return true;
  } else {
    return false;
  }
};
