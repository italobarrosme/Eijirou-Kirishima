const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'John',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=John&profession=developer');
  });

  it('Should create a valid query string even an array is passed as value', () => {
    const obj = {
      name: 'John',
      profession: 'developer',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe(
      'name=John&profession=developer&abilities=JS,TDD',
    );
  });

  it('Should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'John',
      profession: 'developer',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => queryString(obj)).toThrow();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const queryString = 'name=John&profession=developer';

    expect(parse(queryString)).toEqual({
      name: 'John',
      profession: 'developer',
    });
  });

  it('should convert a query string of single key-value pair ', () => {
    const queryString = 'name=John';

    expect(parse(queryString)).toEqual({
      name: 'John',
    });
  });

  it('should convert a query string to an object taking care of comma separated values', () => {
    const queryString = 'name=John&profession=developer&abilities=JS,TDD';

    expect(parse(queryString)).toEqual({
      name: 'John',
      profession: 'developer',
      abilities: ['JS', 'TDD'],
    });
  });
});
