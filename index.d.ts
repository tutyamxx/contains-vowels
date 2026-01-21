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
declare function containsVowels(paramString: string | null | undefined): boolean;

export = containsVowels;
