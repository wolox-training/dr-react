import isArray from './utils';

function min(...params) {
  if (params.length === 0) return undefined;
  const arrayValue = isArray(params[0]) ? params[0] : params;
  return Math.min(...arrayValue);
}

function copy(element) {
  return isArray(element) ? [...element] : { ...element };
}

function reverseMerge(arrayOne, arrayTwo) {
  return [...arrayTwo, ...arrayOne];
}

function filterAttribs({ a, b, ...restObject }) {
  return restObject;
}

export { min, copy, reverseMerge, filterAttribs };
