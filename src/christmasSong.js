const giftOptions = {
  1: ['first', 'a partridge in a pear tree'],
  2: ['second', 'two turtle doves'],
  3: ['third', 'three french hens'],
  4: ['fourth', 'four calling birds'],
  5: ['fifth', 'five gold rings'],
  6: ['sixth', 'six geese a-laying'],
  7: ['seventh', 'seven swans a-swimming'],
  8: ['eighth', 'eight maids a-milking'],
  9: ['ninth', 'nine ladies dancing'],
  10: ['tenth', 'ten lords a-leaping'],
  11: ['eleventh', 'eleven pipers piping'],
  12: ['twelfth', 'twelve drummers drumming'],
};

const christmasSong = () => {
  const result = [];
  let remainingMessages = [];

  for (const key in giftOptions) {
    const number = giftOptions[key][0];
    const message = giftOptions[key][1];
    let otherMessage = '';
    if (remainingMessages.length !== 0) {
      const reversedRemainingMessages = remainingMessages.slice().reverse();
      if (reversedRemainingMessages.slice(0, -1).length > 0) {
        otherMessage +=
          ', ' + reversedRemainingMessages.slice(0, -1).join(', ');
      }
      otherMessage += ', and ' + reversedRemainingMessages.slice(-1);
    }
    result.push(
      `On the ${number} day of Christmas, my true love gave to me: ${message}` +
        otherMessage +
        '.'
    );
    remainingMessages.push(message);
  }

  return result;
};
