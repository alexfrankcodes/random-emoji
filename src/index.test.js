const expect = require("chai").expect;
const randomEmoji = require("./index");
const emojiJSON = require("./emojis.json");

describe("all", () => {
  it("Should return an array of all emojis", () => {
    expect(randomEmoji.all).to.eql(emojiJSON);
  });
});

describe("random", () => {
  it("Should return a single random emoji", () => {
    const selectedEmoji = randomEmoji.random();
    expect(emojiJSON).to.include(selectedEmoji);
  });

  it("Should return an array of random emojis", () => {
    const randomEmojis = randomEmoji.random(4);
    expect(randomEmojis).to.have.length(4);
    randomEmojis.forEach((item) => expect(emojiJSON).to.include(item));
  });
});
