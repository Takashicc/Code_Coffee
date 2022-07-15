const wordCounter = (str) => {
  const words = str
    .replaceAll(/[^a-zA-Z0-9' ]/g, " ")
    .trim()
    .split(/ +/);

  if (words.length === 1 && words[0] === "") {
    return 0;
  }

  return words.length;
};
