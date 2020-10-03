const uniqueRandomArray = require("unique-random-array");
const emojis = require("./emojis.json");

module.exports = { all: emojis, random: uniqueRandomArray(emojis) };
