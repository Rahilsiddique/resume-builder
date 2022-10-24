import { ADD_DETAILS, DEL_DETAILS } from "./resumeAction";

const resumereducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD_DETAILS:
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          points: action.payload,
          sectionTitle: action.section
        }
      };
    case DEL_DETAILS:
      return {};
    default:
      return state;
  }
};

export default resumereducer;
