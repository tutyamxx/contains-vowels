const containsVowels = require('../index.js');

test('Should return true if string contains vowel A', () => expect(containsVowels('AaA')).toBe(true));
test('Should return true if string contains vowel E', () => expect(containsVowels('EeE')).toBe(true));
test('Should return true if string contains vowel I', () => expect(containsVowels('IiI')).toBe(true));
test('Should return true if string contains vowel O', () => expect(containsVowels('OoO')).toBe(true));
test('Should return true if string contains vowel U', () => expect(containsVowels('UuU')).toBe(true));
test('Should return true if string contains all vowels', () => expect(containsVowels('AaEeIiOoUu')).toBe(true));

test('Should return false if param is empty', () => expect(containsVowels()).toBe(false));
test('Should return false if param is empty string', () => {
    expect(containsVowels('')).toBe(false);
    expect(containsVowels(' ')).toBe(false);
});

test('Should return false if param is not a string', () => {
    expect(containsVowels({})).toBe(false);
    expect(containsVowels([])).toBe(false);
    expect(containsVowels([1, '2', 'A'])).toBe(false);
    expect(containsVowels(Infinity)).toBe(false);
    expect(containsVowels(12345)).toBe(false);
    expect(containsVowels(-12345)).toBe(false);
});

test('Should return false if string does not have any vowels', () => {
    expect(containsVowels('BBBBCCCCCC;;;;!!!!!23213')).toBe(false);
    expect(containsVowels('pygmy')).toBe(false);
    expect(containsVowels('ghjklmnqrsxd')).toBe(false);
});
