import React from "react";
import InputControl from "../InputControl/InputControl";
import styles from "../Editor/Editor.module.css";
import { useResumeContext } from "../../context/Context";

const BasicInfo = () => {
  const { valuesT, setValuesT } = useResumeContext();
  console.log(valuesT);
  return (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name eg. Aashu"
          value={valuesT.name}
          onChange={event =>
            setValuesT(prev => ({ ...prev, name: event.target.value }))}
        />
        <InputControl
          label="Title"
          value={valuesT.title}
          placeholder="Enter your title eg. Frontend developer"
          onChange={event =>
            setValuesT(prev => ({ ...prev, title: event.target.value }))}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          value={valuesT.linkedin}
          placeholder="Enter your linkedin profile link"
          onChange={event =>
            setValuesT(prev => ({ ...prev, linkedin: event.target.value }))}
        />
        <InputControl
          label="Github Link"
          value={valuesT.github}
          placeholder="Enter your github profile link"
          onChange={event =>
            setValuesT(prev => ({ ...prev, github: event.target.value }))}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"
          value={valuesT.email}
          placeholder="Enter your email"
          onChange={event =>
            setValuesT(prev => ({ ...prev, email: event.target.value }))}
        />
        <InputControl
          label="Enter phone"
          value={valuesT.phone}
          placeholder="Enter your phone number"
          onChange={event =>
            setValuesT(prev => ({ ...prev, phone: event.target.value }))}
        />
      </div>
    </div>
  );
};

export default BasicInfo;
