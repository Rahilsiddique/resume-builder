import React from "react";
import InputControl from "../InputControl/InputControl";
import styles from "../Editor/Editor.module.css";
import { useResumeContext } from "../../context/Context";

const WorkExp = () => {
  const { valuesT, setValuesT, handlePointUpdate } = useResumeContext();
  return (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. Frontend developer"
          value={valuesT.title}
          onChange={event =>
            setValuesT(prev => ({ ...prev, title: event.target.value }))}
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"
          value={valuesT.companyName}
          onChange={event =>
            setValuesT(prev => ({ ...prev, companyName: event.target.value }))}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
          value={valuesT.certificationLink}
          onChange={event =>
            setValuesT(prev => ({
              ...prev,
              certificationLink: event.target.value
            }))}
        />
        <InputControl
          label="Location"
          placeholder="Enter location eg. Remote"
          value={valuesT.location}
          onChange={event =>
            setValuesT(prev => ({ ...prev, location: event.target.value }))}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          value={valuesT.startDate}
          onChange={event =>
            setValuesT(prev => ({ ...prev, startDate: event.target.value }))}
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
          value={valuesT.endDate}
          onChange={event =>
            setValuesT(prev => ({ ...prev, endDate: event.target.value }))}
        />
      </div>

      <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
          value={valuesT.points ? valuesT.points[0] : ""}
          onChange={event => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={valuesT.points ? valuesT.points[1] : ""}
          onChange={event => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={valuesT.points ? valuesT.points[2] : ""}
          onChange={event => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );
};

export default WorkExp;
