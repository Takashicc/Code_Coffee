const swapAdjacentPairs = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i + 1], arr[i]);
  }

  return result;
};
