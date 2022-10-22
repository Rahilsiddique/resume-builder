import React, { useContext } from "react";
import resumeContext from "../../context/context";
import styles from "../Editor/Editor.module.css";
import InputControl from "../InputControl/InputControl";

const Achievement = () => {
  const { useHandleInput, values } = useContext(resumeContext);
  console.log(useHandleInput);
  return (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => useHandleInput(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => useHandleInput(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => useHandleInput(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => useHandleInput(event.target.value, 3)}
        />
      </div>
    </div>
  );
};

export default Achievement;
