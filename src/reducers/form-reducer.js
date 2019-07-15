/**
 * Reducer function for history
 * @param {object} state
 * @param {string} action
 * @description reducer that handles the getHistory event coming from the action and performs a change on it
 */

const initialState = {
  url: '',
  method: 'get',
  requestBody: '',
  username: '',
  password: '',
  token: '',
  header: {},
  body: {},
  history: {},
  headersVisible: false,
};

export default (state = initialState, action) => {
 const { type, payload } = action;

 switch (type) {
   case "GET_FORM_DATA":
     return Object.assign({}, state, {...payload});
   default:
     return state;
 }
};