const TABLE_SIZE = 0x10000;
const TABLE_SIZE_MASK = 0xffff;
const SIN_STEP = TABLE_SIZE / (2.0 * Math.PI);
const COS_STEP_SHIFT = TABLE_SIZE >>> 2;
const INV_SIN_STEP = (2.0 * Math.PI) / TABLE_SIZE;
const SIN_TABLE = new Float32Array(TABLE_SIZE);

for (let i = 0; i < TABLE_SIZE; ++i) {
  SIN_TABLE[i] = Math.sin(INV_SIN_STEP * i);
}

// Only FINITE values are allowed!
export const sin = (angle: number): number => SIN_TABLE[((angle * SIN_STEP) | 0) & TABLE_SIZE_MASK];

// Only FINITE values are allowed!
export const cos = (angle: number): number =>
  SIN_TABLE[(((angle * SIN_STEP) | 0) + COS_STEP_SHIFT) & TABLE_SIZE_MASK];
