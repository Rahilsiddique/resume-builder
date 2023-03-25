import React from "react";
import InputControl from "../InputControl/InputControl";
import styles from "../Editor/Editor.module.css";
import { useResumeContext } from "../../context/Context";

const Achievement = () => {
  const { valuesT, handlePointUpdate } = useResumeContext();
  return (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
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
        <InputControl
          placeholder="Line 4"
          value={valuesT.points ? valuesT.points[3] : ""}
          onChange={event => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );
};

export default Achievement;
