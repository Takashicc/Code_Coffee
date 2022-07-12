const minMaxNumScraper = (strOfNums) => {
  const numsArray = strOfNums.split(" ").map((v) => Number(v));
  let min = numsArray[0];
  let max = numsArray[0];
  for (let i = 1; i < numsArray.length; i++) {
    const value = numsArray[i];
    if (value < min) {
      min = value;
    } else if (value > max) {
      max = value;
    }
  }

  return [min, max];
};
