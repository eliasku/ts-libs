const SIN_TABLE_SIZE = 0x10000;
const SIN_TABLE_MASK = 0xffff;
const SIN_STEP = SIN_TABLE_SIZE / (2.0 * Math.PI);
const COS_SHIFT = SIN_TABLE_SIZE >>> 2;
const INV_SIN_STEP = (2.0 * Math.PI) / SIN_TABLE_SIZE;
const SIN_TABLE = new Float32Array(SIN_TABLE_SIZE);

for (let i = 0; i < SIN_TABLE_SIZE; ++i) {
  SIN_TABLE[i] = Math.sin(INV_SIN_STEP * i);
}

// Only FINITE values are allowed!
export const sin = (angle: number): number => SIN_TABLE[((angle * SIN_STEP) | 0) & SIN_TABLE_MASK];

// Only FINITE values are allowed!
export const cos = (angle: number): number =>
  SIN_TABLE[(((angle * SIN_STEP) | 0) + COS_SHIFT) & SIN_TABLE_MASK];
