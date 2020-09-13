import { Random, Lcg32 } from '..';

test('simple lcg32 check', () => {
  const rnd = new Random(new Lcg32());
  expect(rnd.chance(0)).toBeFalsy();
  expect(rnd.chance(1)).toBeTruthy();
  expect(rnd.integer(0, 0)).toStrictEqual(0);
  expect(rnd.random()).toBeGreaterThanOrEqual(0);
  expect(rnd.random()).toBeLessThan(1);
  expect(rnd.element([0, 0, 0])).toStrictEqual(0);
  expect(rnd.roll(1)).toStrictEqual(0);
  expect(rnd.range(1, 1)).toStrictEqual(1);
  expect(rnd.next()).toBeGreaterThanOrEqual(0);
  expect(rnd.next()).toBeLessThan(rnd.maxLimit);
});
