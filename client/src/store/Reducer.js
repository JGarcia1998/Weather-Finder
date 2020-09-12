const initialState = {
  searchedCity: null,
};

const reducer = (state = initialState, action) => {
  if (action.type == "SETSEARCH") {
    return {
      ...state,
      searchedCity: action.value,
    };
  }
  return state;
};

export default reducer;
