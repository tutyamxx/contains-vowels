/**
 *  contains-vowels - Checks if a string contains vowels
 *  @version: v1.0.4
 *  @link: https://github.com/tutyamxx/contains-vowels
 *  @license: GPL v3.0
 **/

module.exports = (paramString) => (paramString && paramString?.length > 0 && typeof paramString === 'string') ? /[aeiouAEIOU]/.test(paramString) : false;
