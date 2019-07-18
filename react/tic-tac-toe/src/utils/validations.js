import { required, email, length } from 'redux-form-validators';

import { ERRORS_FORM } from '~constants/errors';

export const VALIDATION = {
  required: required({ message: ERRORS_FORM.required }),
  email: email({ message: ERRORS_FORM.email }),
  minLength: min => length({ min, message: ERRORS_FORM.minLength(min) })
};
