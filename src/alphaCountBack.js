const alphaCountBack = (letter) => {
  const ALPHABETS = "abcdefghijklmnopqrstuvwxyz".split("").reverse();

  let result;
  if (/[a-z]/.test(letter)) {
    result = ALPHABETS.slice(ALPHABETS.indexOf(letter)).join("");
  } else {
    result = ALPHABETS.slice(ALPHABETS.indexOf(letter.toLowerCase()))
      .join("")
      .toUpperCase();
  }

  return result;
};
