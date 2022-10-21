import { ADD_DETAILS, DEL_DETAILS } from "./resumeAction";

const resumereducer = (state, action) => {
  switch (action.type) {
    case ADD_DETAILS:
      return {};
    case DEL_DETAILS:
      return {};
    default:
      return state;
  }
};

export default resumereducer;
