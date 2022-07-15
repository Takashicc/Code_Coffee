const oxfordCommaBuilder = (arr, includeOxfordComma) => {
  let oxfordComma = "";
  if (includeOxfordComma && arr.length !== 2) {
    oxfordComma = ",";
  }

  const exceptLastElements = arr.slice(0, arr.length - 1);
  const lastElement = arr.slice(-1);

  return `${exceptLastElements.join(", ")}${oxfordComma} and ${lastElement}`;
};
