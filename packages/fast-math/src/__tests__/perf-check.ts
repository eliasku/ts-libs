import {cos, sin} from "../sincos";
import {acos} from "../acos";
import {absSMI, signSMI} from "../smi";
import {abs, ceil, floor, round, sign} from "../number";

const measure = (N: number, fn: (i: number) => number): number => {
  for (let i = 0; i < N; ++i) {
    fn(i);
  }

  const t = performance.now();
  for (let i = 0; i < N; ++i) {
    fn(i);
  }
  return performance.now() - t;
};

test('sin-cos performance', () => {
  const N = 10000;
  const t0 = measure(N, i => sin(i) + cos(i));
  const t1 = measure(N, i => Math.sin(i) + Math.cos(i));
  expect(t0).toBeLessThan(t1);
});

test('acos performance', () => {
  const N = 10000;
  const t0 = measure(N, i => acos(i));
  const t1 = measure(N, i => Math.acos(i));
  expect(t0).toBeLessThan(t1);
});

test.skip('sign performance', () => {
  const N = 10000;
  const t0 = measure(N, i => signSMI(i));
  const t1 = measure(N, i => sign(i * 0.01));
  const t2 = measure(N, i => Math.sign(i * 0.01));
  expect(t0).toBeLessThan(t2);
  expect(t1).toBeLessThan(t2);
});

test.skip('abs performance', () => {
  const N = 10000;
  const t0 = measure(N, i => absSMI(i));
  const t1 = measure(N, i => abs(i * 0.01));
  const t2 = measure(N, i => Math.abs(i * 0.01));
  expect(t0).toBeLessThan(t2);
  expect(t1).toBeLessThan(t2);
});

test('ceil performance', () => {
  const N = 10000;
  const t0 = measure(N, i => ceil(i * 0.01));
  const t1 = measure(N, i => Math.ceil(i * 0.01));
  expect(t0).toBeLessThan(t1);
});

test('floor performance', () => {
  const N = 10000;
  const t0 = measure(N, i => floor(i * 0.01));
  const t1 = measure(N, i => Math.floor(i * 0.01));
  expect(t0).toBeLessThan(t1);
});

test('round performance', () => {
  const N = 10000;
  const t0 = measure(N, i => round(i * 0.01));
  const t1 = measure(N, i => Math.round(i * 0.01));
  expect(t0).toBeLessThan(t1);
});


