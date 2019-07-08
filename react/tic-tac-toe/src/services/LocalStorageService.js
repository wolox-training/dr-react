function setValue(key, value) {
  if (!value && value !== false) {
    return;
  }
  const encodedKey = window.btoa(key);
  const stringValue = JSON.stringify(value);
  const encodedValue = window.btoa(stringValue);
  try {
    window.localStorage.setItem(encodedKey, encodedValue);
  } catch (e) {
    throw Error('Error: ', e);
  }
}

function getValue(key) {
  const encodedKey = window.btoa(key);
  try {
    const encodedValue = window.localStorage.getItem(encodedKey);
    const stringValue = encodedValue && window.atob(encodedValue);
    return stringValue && JSON.parse(stringValue);
  } catch (e) {
    throw Error('Error: ', e);
  }
}

function removeValue(key) {
  const encodedKey = window.btoa(key);
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
