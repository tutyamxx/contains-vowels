/**
 *  contains-vowels - Checks if a string contains vowels
 *  @version: v1.1.3
 *  @link: https://github.com/tutyamxx/contains-vowels
 *  @license: MIT
 **/

/**
 * Checks if a given string contains at least one vowel (a, e, i, o, u).
 *
 * @param {string} paramString - The string to check.
 * @returns {boolean} Returns `true` if the string contains a vowel, otherwise `false`.
 *
 * @example
 * containsVowels("hello"); // true
 * containsVowels("rhythm"); // false
 * containsVowels(""); // false
 * containsVowels(123); // false
 */
const containsVowels = (paramString) => (typeof paramString === 'string' && paramString.length > 0) ? /[aeiou]/i.test(paramString) : false;

// --| CommonJS export
module.exports = containsVowels;

// --| ESM default export for `import` statements
module.exports.default = containsVowels;
