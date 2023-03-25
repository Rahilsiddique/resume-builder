export const resumeReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_BASICINFO":
      return {
        ...state,
        [action.payload.name]: {
          ...state[action.payload.name],
          detail: action.payload.detail
        }
      };
    case "UPDATE_LIST":
      return {
        ...state,
        [action.payload.name]: {
          ...state[action.payload.name],
          details: action.payload.detail
        }
      };
    default:
      return state;
  }
};
