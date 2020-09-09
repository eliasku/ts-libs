import { toU8s } from '../buffer';
import { crc32 } from '../crc32';

test('crc32 default cases', () => {
  // no data case
  expect(crc32(new Uint8Array())).toStrictEqual(0);

  // https://rosettacode.org/wiki/CRC-32
  expect(crc32(toU8s('The quick brown fox jumps over the lazy dog'))).toStrictEqual(0x414fa339);

  // Source: http://cryptomanager.com/tv.html
  expect(crc32(toU8s('various CRC algorithms input data'))).toStrictEqual(0x9bd366ae);

  // Source: http://www.febooti.com/products/filetweak/members/hash-and-crc/test-vectors/
  expect(crc32(toU8s('Test vector from febooti.com'))).toStrictEqual(0x0c877f61);
});
