const uniqueRandomArray = require("unique-random-array");
const emojis = require("./emojis.json");
const getRandomEmoji = uniqueRandomArray(emojis);

module.exports = { all: emojis, random: random };

function random(number) {
  if (number === undefined) {
    return getRandomEmoji();
  } else {
    let randomEmojis = [];
    for (let i = 0; i < number; i++) {
      randomEmojis.push(getRandomEmoji());
    }
    return randomEmojis;
  }
}
