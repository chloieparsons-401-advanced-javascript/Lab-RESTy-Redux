/**
 * Reducer function for history
 * @param {object} state
 * @param {string} action
 * @description reducer that handles the getHistory event coming from the action and performs a change on it
 */

 const initialState = {};

 export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_HISTORY":
        return Object.assign({}, state, {...payload.history});

    default:
      return state;
  }
};

 