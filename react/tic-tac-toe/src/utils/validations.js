export const validate = values => {
  const errors = {};
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password || values.password.length < 8) {
    errors.password = 'Must be 8 characters or more';
  }
  return errors;
};
