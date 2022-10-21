import React, { useReducer } from "react";
import resumeContext from "./context";
import { ADD_DETAILS } from "./resumeAction";
import resumereducer from "./resumeReducer";

const ResumeState = ({ children }) => {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
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

  //   update resume info
  const onResumeUpdate = () => {
    dispatch({
      type: ADD_DETAILS,
      payload: state
    });
  };
  return (
    <resumeContext.Provider value={{ onResumeUpdate }}>
      {children}
    </resumeContext.Provider>
  );
};

export default ResumeState;
