const go = (method, payload) => {
  return {
    type: 'GET_FORM_DATA',
    payload: payload
  };
};

export const getFormData = payload => dispatch => dispatch(go(payload));