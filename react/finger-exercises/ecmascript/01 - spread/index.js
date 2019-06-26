import isArray from './utils';

export function min(params) {
  return isArray(params) ? Math.min(...params) : Math.min(params);
}

export function copy() {

}
