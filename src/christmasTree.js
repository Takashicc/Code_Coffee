const christmasTree = (str, size) => {
  if (str !== '*' && str !== '#' && str !== 'a') {
    return '';
  }

  const WHITESPACE = ' ';

  const result = [];
  for (let i = 1; i <= size; i++) {
    result.push(
      `${WHITESPACE.repeat(size - i)}${str.repeat(i).split('').join(' ')}`
    );
  }
  return result.join('\n');
};
