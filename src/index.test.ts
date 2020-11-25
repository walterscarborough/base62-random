import {generateRandomBase62} from './index';

describe('index', () => {
  it('should generate a base62 string that matches the specified length', () => {
    const loopLimit = 1000;
    let loopCounter = 0;

    for (let i = 0; i < loopLimit; i++) {
      const output = generateRandomBase62(10);

      expect(output).toHaveLength(10)

      loopCounter += 1;
    }

    expect(loopCounter).toEqual(loopLimit);
  });

  it('should generate a random base62 string', () => {
    const loopLimit = 10_000;
    let loopCounter = 0;

    const seenValues = new Set();

    for (let i = 0; i < loopLimit; i++) {
      const outputA = generateRandomBase62(10);
      const outputB = generateRandomBase62(10);

      expect(outputA).not.toEqual(outputB);

      if (seenValues.has(outputA) || seenValues.has(outputB)) {
        fail("base62 string should be random!");
      }

      seenValues.add(outputA);
      seenValues.add(outputB);

      loopCounter += 1;
    }

    expect(loopCounter).toEqual(loopLimit);
  });
});
