const VALUES_COUNT = 0x10000; // include 0 symmetric
const VALUES_SIZE = 0x10001;
const INV_ACOS_STEP = 2.0 / VALUES_COUNT;
const ACOS_STEP = VALUES_COUNT >>> 1;
const ACOS_TABLE = new Float32Array(VALUES_SIZE);

for (let i = 0; i < VALUES_SIZE; ++i) {
    ACOS_TABLE[i] = Math.acos(-1.0 + INV_ACOS_STEP * i);
}

export const acos = (cos: number) =>
    (cos >= -1.0 && cos <= 1.0) ?
        ACOS_TABLE[((1.0 + cos) * ACOS_STEP) | 0] : NaN;
