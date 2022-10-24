import React, { useReducer, useRef, useState } from "react";
import resumeContext from "./context";
import { ADD_DETAILS } from "./resumeAction";
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
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
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

  const [activeInformation, setActiveInformation] = useState(
    initialState[sections[Object.keys(sections)[0]]]
  );

  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || ""
  });

  const useHandlePointUpdate = (value = "", index) => {
    const inputRef = useRef();
    console.log(inputRef.current.value);
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };

  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );

  //   update resume info
  const onResumeUpdate = (stateT, sectionT) =>
    dispatch({ type: ADD_DETAILS, payload: stateT, section: sectionT });

  return (
    <resumeContext.Provider
      value={{
        onResumeUpdate,
        useHandlePointUpdate,
        values,
        setValues,
        state,
        sectionTitle
      }}
    >
      {children}
    </resumeContext.Provider>
  );
};

export default ResumeState;
