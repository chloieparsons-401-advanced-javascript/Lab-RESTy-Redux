const go = (method, payload) => {
  return {
    type: 'SET_HISTORY',
    payload: payload
  };
};

export const setHistory = payload => dispatch => dispatch(go(payload));

// export const get = payload => dispatch => {
//   return superagent.get(payload.url).then(data => {
//     dispatch(go("GET", { model: payload.model, data: data.body.results }));
//   });
// };

// export const post = payload => dispatch => {
//   return superagent
//     .post(payload.url)
//     .send(payload.record)
//     .then(data => {
//       dispatch(go("POST", { model: payload.model, data: data.body }));
//     })
//     .catch(console.error);
// };

// export const put = payload => dispatch => {
//   return superagent
//     .put(payload.url)
//     .send(payload.record)
//     .then(data => {
//       dispatch(
//         go("PUT", { model: payload.model, id: payload.id, data: data.body })
//       );
//     })
//     .catch(console.error);
// };

// export const destroy = payload => dispatch => {
//   return superagent
//     .delete(payload.url)
//     .then(data => {
//       dispatch(go("DELETE", { model: payload.model, id: payload.id }));
//     })
//     .catch(console.error);
// };
