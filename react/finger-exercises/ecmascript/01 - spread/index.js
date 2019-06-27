import isArray from './utils';

const returnOneArray = (array) => array.reduce((acc, val) => acc.concat(val), []);

function min(...params) {
  if (params.length === 0) return undefined;

  return isArray(...params)
    ? Math.min(...returnOneArray(params))
    : Math.min(...params);
}

function copy(copiedArray) {
  return isArray(copiedArray) ? [...copiedArray] : { ...copiedArray };
}

function reverseMerge(...params) {
  return params.reduceRight((acc, val) => acc.concat(val));
}

export { min, copy, reverseMerge };
