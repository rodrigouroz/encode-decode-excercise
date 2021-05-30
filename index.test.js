const { encode, decode } = require('./index');

describe('encode', () => {
  test('aabbaa', () => {
    expect(encode('aabbaa')).toBe('a2b2a2');
  });
});

describe('decode', () => {
  test('a2b2a2', () => {
    expect(encode('a2b2a2')).toBe('aabbaa');
  });
});
