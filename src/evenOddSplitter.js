const evenOddSplitter = (arr) => {
  const result = [];
  const evenIndexes = [];
  const oddIndexes = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      evenIndexes.push(arr[i]);
    } else {
      oddIndexes.push(arr[i]);
    }
  }

  result.push(evenIndexes);
  result.push(oddIndexes);

  return result;
};
