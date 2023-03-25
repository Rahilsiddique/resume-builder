import React from "react";
import InputControl from "../InputControl/InputControl";
import styles from "../Editor/Editor.module.css";
import { useResumeContext } from "../../context/Context";

const Summary = () => {
  const { valuesT, setValuesT } = useResumeContext();
  return (
    <div className={styles.detail}>
      <InputControl
        label="Summary"
        value={valuesT.summary}
        placeholder="Enter your objective/summary"
        onChange={event =>
          setValuesT(prev => ({ ...prev, summary: event.target.value }))}
      />
    </div>
  );
};

export default Summary;
