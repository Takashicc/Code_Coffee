const nOccursNTimes = (n, values) => {
  let characterCount = 0;
  for (const value of values) {
    if (n === value) {
      characterCount++;
      if (characterCount > n) {
        break;
      }
    }
  }

  return characterCount === n;
};
