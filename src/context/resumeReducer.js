import { UPDATE_DETAILS } from "./resumeAction";

const resumereducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case UPDATE_DETAILS:
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          points: action.payload,
          sectionTitle: action.section
        }
      };
    default:
      return state;
  }
};

export default resumereducer;
