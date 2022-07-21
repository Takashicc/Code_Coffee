const atMostThree = (str) => {
  let result = "";
  const countCharacter = {};
  for (const char of str) {
    if (countCharacter[char] === undefined) {
      countCharacter[char] = 0;
      result += char;
      continue;
    }

    if (countCharacter[char] === 2) {
      continue;
    }

    countCharacter[char]++;
    result += char;
  }

  return result;
};
