import React from "react";
import InputControl from "../InputControl/InputControl";
import styles from "../Editor/Editor.module.css";
import { useResumeContext } from "../../context/Context";

const Education = () => {
  const { valuesT, setValuesT } = useResumeContext();
  return (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          value={valuesT.title}
          placeholder="Enter title eg. B-tech"
          onChange={event =>
            setValuesT(prev => ({ ...prev, title: event.target.value }))}
        />
      </div>
      <InputControl
        label="College/School Name"
        value={valuesT.college}
        placeholder="Enter name of your college/school"
        onChange={event =>
          setValuesT(prev => ({ ...prev, college: event.target.value }))}
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
          value={valuesT.startDate}
          onChange={event =>
            setValuesT(prev => ({ ...prev, startDate: event.target.value }))}
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          value={valuesT.endDate}
          onChange={event =>
            setValuesT(prev => ({ ...prev, endDate: event.target.value }))}
        />
      </div>
    </div>
  );
};

export default Education;
