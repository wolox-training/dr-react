const ERRORS = {
  CLIENT_ERROR: 'Incorrect email address or password.',
  SERVER_ERROR: 'Any 500 series error.',
  TIMEOUT_ERROR: 'Server didnt respond in time.',
  CONNECTION_ERROR: 'Server not available, bad dns.',
  NETWORK_ERROR: 'Network not available.',
  CANCEL_ERROR:
    ' Request has been cancelled. Only possible if `cancelToken` is provided in config, see axios `Cancellation`.'
};

export const ERRORS_FORM = {
  email: 'Invalid email address',
  required: 'Field is required',
  minLengthEight: 'Must be 8 characters or more'
};

export default ERRORS;
