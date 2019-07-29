import api from '~config/api';

export const setApiHeaders = token => {
  api.setHeaders({
    Authorization: token
  });
};
