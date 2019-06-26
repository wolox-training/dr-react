import isArray from './utils';

export function min(...params) {
  return isArray(...params)
    ? Math.min(...params.reduce((acc, val) => acc.concat(val), [])) 
    : Math.min(...params);
}

export function copy() {

}
