const validatePIN = pin => {
  const regex = /^\d{4}(\d{2})?$/;
  const output = regex.test(pin);
  return output;
};
