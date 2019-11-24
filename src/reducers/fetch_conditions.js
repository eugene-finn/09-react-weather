const fetchConditions = (state = {
  conditions: []
}, action) => {
  if (action.type === "FETCH_WEATHER") {
    state = { ...state, conditions: action.payload }
  }
  return state;

};

export default fetchConditions;