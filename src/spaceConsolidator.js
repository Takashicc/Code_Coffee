const spaceConsolidator = (text) => {
  return text.split(/ +|\n|\r\n|\t/).join(" ");
};
