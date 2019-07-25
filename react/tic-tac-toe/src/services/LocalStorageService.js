function encondeValue(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

function decodeValue(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

function setValue(key, value) {
  if (!value && value !== false) {
    return;
  }
  const encodedKey = encondeValue(key);
  const stringValue = JSON.stringify(value);
  const encodedValue = encondeValue(stringValue);
  try {
    window.localStorage.setItem(encodedKey, encodedValue);
  } catch (e) {
    throw Error('Error: ', e);
  }
}

function getValue(key) {
  const encodedKey = encondeValue(key);
  try {
    const encodedValue = window.localStorage.getItem(encodedKey);
    const stringValue = encodedValue && decodeValue(encodedValue);
    return stringValue && JSON.parse(stringValue);
  } catch (e) {
    throw Error('Error: ', e);
  }
}

function removeValue(key) {
  const encodedKey = encondeValue(key);
  try {
    window.localStorage.removeItem(encodedKey);
  } catch (e) {
    throw Error('Error: ', e);
  }
}

function clearStorage() {
  if (window.localStorage) {
    window.localStorage.clear();
  }
}

export default {
  setValue,
  getValue,
  removeValue,
  clearStorage
};
