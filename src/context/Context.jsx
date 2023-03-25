import { createContext, useContext, useReducer, useState } from "react";

import { resumeReducer } from "./resumeReducer";

export const ResumeContext = createContext();

const sections = {
  basicInfo: "Basic Info",
  workExp: "Work Experience",
  project: "Projects",
  education: "Education",
  achievement: "Achievements",
  summary: "Summary",
  other: "Other"
};

export const INITIAL_STATE = {
  [sections.basicInfo]: {
    id: sections.basicInfo,
    sectionTitle: sections.basicInfo,
    detail: {}
  },
  [sections.workExp]: {
    id: sections.workExp,
    sectionTitle: sections.workExp,
    details: []
  },
  [sections.project]: {
    id: sections.project,
    sectionTitle: sections.project,
    details: []
  },
  [sections.education]: {
    id: sections.education,
    sectionTitle: sections.education,
    details: []
  },
  [sections.achievement]: {
    id: sections.achievement,
    sectionTitle: sections.achievement,
    points: []
  },
  [sections.summary]: {
    id: sections.summary,
    sectionTitle: sections.summary,
    detail: ""
  },
  [sections.other]: {
    id: sections.other,
    sectionTitle: sections.other,
    detail: ""
  }
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(resumeReducer, INITIAL_STATE);
  const [activeInformation, setActiveInformation] = useState(
    state[sections[Object.keys(sections)[0]]]
  );
  const [valuesT, setValuesT] = useState({});
  const handlePointUpdate = (value, index) => {
    const tempvaluesT = { ...valuesT };
    if (!Array.isArray(tempvaluesT.points)) tempvaluesT.points = [];
    tempvaluesT.points[index] = value;
    setValuesT(tempvaluesT);
  };
  return (
    <ResumeContext.Provider
      value={{
        state,
        dispatch,
        valuesT,
        setValuesT,
        handlePointUpdate,
        activeInformation,
        setActiveInformation
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export default Context;

export const useResumeContext = () => {
  return useContext(ResumeContext);
};
