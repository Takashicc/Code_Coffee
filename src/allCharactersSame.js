const allCharactersSame = (str) => {
  if (str.length === 0) {
    return true;
  }

  const characters = str.split('');
  let previousChar = characters[0];
  for (let i = 1; i < characters.length; i++) {
    if (previousChar !== characters[i]) {
      return false;
    }
    previousChar = characters[i];
  }

  return true;
};
