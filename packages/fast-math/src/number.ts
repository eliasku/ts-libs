export const ceil = (x: number) => {
    // process.env.DEBUG && assert(typeof x === 'number');
    return ~~x === x ? x : ((x > 0) ? (~~x + 1) : ~~x);
};

export const floor = (x: number) => {
    // process.env.DEBUG && assert(typeof x === 'number');
    return ~~x === x ? x : ((x > 0) ? ~~x : (~~x - 1));
};

export const round = (x: number) => {
    // process.env.DEBUG && assert(typeof x === 'number');
    return (x + (x < 0 ? -0.5 : 0.5)) | 0;
};

export const abs = (x: number) => {
    // process.env.DEBUG && assert(typeof x === 'number');
    return x < 0 ? -x : x;
};

export const sign = (x: number) => {
    // process.env.DEBUG && assert(typeof x === 'number');
    return x ? (x < 0 ? -1 : 1) : 0;
};