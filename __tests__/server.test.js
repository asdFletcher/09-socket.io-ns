'use strict';

const server = require('./../server.js');
const getLowerCase = server.getLowerCase;
const incrementLetter = server.incrementLetter;
const incrementNumber = server.incrementNumber;

console.log({getLowerCase});
console.log({incrementLetter});
console.log({incrementNumber});

describe('server letter lowercase', () => {
  it('can turn letters to lowercase', () => {
    let letter = 'A';
    let result = getLowerCase(letter);
    let expected = 'a';
    expect(result).toEqual(expected);
  });
});

describe('server global letter', () => {
  it('can increment a global letter', () => {
    let letter = 'A';
    letter = incrementLetter(letter);
    let expected = 'B';
    expect(letter).toEqual(expected);
  });

  it('wraps from Z to a correctly', () => {
    let letter = 'Z';
    letter = incrementLetter(letter);
    let expected = 'a';
    expect(letter).toEqual(expected);
  });

  it('wraps from z to A correctly', () => {
    let letter = 'z';
    letter = incrementLetter(letter);
    let expected = 'A';
    expect(letter).toEqual(expected);
  });

});

describe('server global letter', () => {
  it('can increment a global number', () => {
    let number = 0;
    number = incrementNumber(number);
    let expected = 1;
    expect(number).toEqual(expected);
  });

  it('can handle larger numbers', () => {
    let number = 100;
    number = incrementNumber(number);
    let expected = 101;
    expect(number).toEqual(expected);
  });

  it('can handle negative numbers', () => {
    let number = -10;
    number = incrementNumber(number);
    let expected = -9;
    expect(number).toEqual(expected);
  });

});