# random-emoji

![Travis (.org)](https://img.shields.io/travis/alexfrankcodes/random-emoji?style=for-the-badge)
![Codecov](https://img.shields.io/codecov/c/gh/alexfrankcodes/random-emoji?style=for-the-badge)
![npm](https://img.shields.io/npm/v/@alexfrankcodes/random-emoji?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/@alexfrankcodes/random-emoji?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/@alexfrankcodes/random-emoji?style=for-the-badge)

A small JS library for generating random emojis. I built this because I wanted to learn how to write and deploy libraries. I highly recommend checking out [Kent Dodds'](https://twitter.com/kentcdodds) series on [egghead.io](https://egghead.io/courses/how-to-write-an-open-source-javascript-library). 🙂💖

## Installation

This package is distributed via npm:

```
npm install @alexfrankcodes/random-emoji
```

## Usage

```javascript
const re = require("@alexfrankcodes/random-emoji");
const allEmojis = re.all;
const randomEmoji = re.random();
const fourRandomEmojis = re.random(4);
```
