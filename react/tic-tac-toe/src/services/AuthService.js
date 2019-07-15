import api from '~config/api';

export default {
  login: user => api.post('/login', user)
};
