const tillZero = (nums) => {
  let sumValue = 0;
  for (let num of nums) {
    if (num === 0) {
      break;
    }
    sumValue += num;
  }

  return sumValue;
};
