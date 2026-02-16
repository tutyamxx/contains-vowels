# contains-vowels

<p align="center"><a href="https://nodei.co/npm/contains-vowels/"><img src="https://nodei.co/npm/contains-vowels.png"></a></a></p>
<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
</p>

* Simple NPM Package to check if string contains vowels
* ♻️ Works seamlessly with `CommonJS`, `ESM` and `TypeScript`
* See examples below

# Install via [NPM](https://www.npmjs.com/package/contains-vowels)

`$ npm i contains-vowels`

# Usage

- Returns a `Boolean` indicating whether `string` contains vowels.

## CommonJS
```javascript
const containsVowels = require('contains-vowels');

const textWithVowels = 'Test string here!';

if (containsVowels(textWithVowels)) {
    console.log('Text contains one or more vowels!');
}
```

## ESM
```javascript
import containsVowels from 'contains-vowels';

const textWithVowels = 'Test string here!';

if (containsVowels(textWithVowels)) {
    console.log('Text contains one or more vowels!');
}
```

## TypeScript
```javascript
import containsVowels from 'contains-vowels';

const textWithVowels: string = 'Test string here!';

if (containsVowels(textWithVowels)) {
    console.log('Text contains one or more vowels!');
}
```
