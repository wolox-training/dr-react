import isArray from './utils';

export function min(...params) {
  if (params.length === 0) return undefined;

  return isArray(...params)
    ? Math.min(...params.reduce((acc, val) => acc.concat(val), []))
    : Math.min(...params);
}

export function copy(copiedArray) {
  return isArray(copiedArray) ? [...copiedArray] : { ...copiedArray };
}
