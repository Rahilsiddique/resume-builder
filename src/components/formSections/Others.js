import React from "react";
import InputControl from "../InputControl/InputControl";
import styles from "../Editor/Editor.module.css";
import { useResumeContext } from "../../context/Context";

const Others = () => {
  const { valuesT, setValuesT } = useResumeContext();
  return (
    <div className={styles.detail}>
      <InputControl
        label="Other"
        value={valuesT.other}
        placeholder="Enter something"
        onChange={event =>
          setValuesT(prev => ({ ...prev, other: event.target.value }))}
      />
    </div>
  );
};

export default Others;
