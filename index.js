/**
 *  contains-vowels - Checks if a string contains vowels
 *  @version: v1.0.7
 *  @link: https://github.com/tutyamxx/contains-vowels
 *  @license: GPL v3.0
 **/

module.exports = (paramString) => (typeof paramString === 'string' && paramString.length > 0) ? /[aeiou]/i.test(paramString) : false;
