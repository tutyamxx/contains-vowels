const containsVowels = require('../index');

describe('containsVowels', () => {
    it('Should return true for strings containing vowels', () => {
        expect(containsVowels('hello')).toBe(true);
        expect(containsVowels('programming')).toBe(true);
        expect(containsVowels('AEIOU')).toBe(true);
        expect(containsVowels('rhythm')).toBe(false);
    });

    it('Should return false for strings with no vowels', () => {
        expect(containsVowels('crypt')).toBe(false);
        expect(containsVowels('nth')).toBe(false);
    });

    it('Should return false for empty strings', () => {
        expect(containsVowels('')).toBe(false);
    });

    it('Should return false for non-string inputs', () => {
        expect(containsVowels(123)).toBe(false);
        expect(containsVowels(null)).toBe(false);
        expect(containsVowels(undefined)).toBe(false);
        expect(containsVowels([ 'a' ])).toBe(false);
        expect(containsVowels({ a: 1 })).toBe(false);
    });

    it('Should handle strings with special characters', () => {
        expect(containsVowels('h@llo')).toBe(true);
        expect(containsVowels('!@#$%^&*()_+')).toBe(false);
    });
});
