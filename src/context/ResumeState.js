import React, { useReducer } from "react";
import resumeContext from "./context";
import resumereducer from "./resumeReducer";

const ResumeState = ({ children }) => {
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other"
  };
  const initialState = {
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
  const [state, dispatch] = useReducer(resumereducer, initialState);

  return (
    <resumeContext.Provider
      value={{
        dispatch,
        state
      }}
    >
      {children}
    </resumeContext.Provider>
  );
};

export default ResumeState;
