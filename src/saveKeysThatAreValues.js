const saveKeysThatAreValues = (obj) => {
  // Solution 1
  // Get the value from the object and lookup the object accessing with the value
  // Time complexity O(n)
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (obj[value] !== undefined) {
      result[value] = obj[value];
    }
  }
  return result;

  // Solution 2
  // Loop through the keys of the object, and looping through again to find the matched key(first loop's key) and value(second loop value)
  // Time complexity O(n^2)
  // const result = {};
  // for (const key1 in obj) {
  //   for (const key2 in obj) {
  //     const value = obj[key2];
  //     if (key1 === value) {
  //       result[key1] = obj[key1];
  //       break;
  //     }
  //   }
  // }
  // return result;
};
