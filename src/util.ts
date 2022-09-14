const stringifyOriginal = JSON.stringify;
JSON.stringify = (val) => stringifyOriginal(val, undefined, 2);

export {};
