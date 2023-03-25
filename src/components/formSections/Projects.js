import React from "react";
import InputControl from "../InputControl/InputControl";
import styles from "../Editor/Editor.module.css";
import { useResumeContext } from "../../context/Context";

const Projects = () => {
  const { valuesT, setValuesT, handlePointUpdate } = useResumeContext();
  return (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          value={valuesT.title}
          placeholder="Enter title eg. Chat app"
          onChange={event =>
            setValuesT(prev => ({ ...prev, title: event.target.value }))}
        />
      </div>
      <InputControl
        label="Overview"
        value={valuesT.overview}
        placeholder="Enter basic overview of project"
        onChange={event =>
          setValuesT(prev => ({ ...prev, overview: event.target.value }))}
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          value={valuesT.link}
          placeholder="Enter deployed link of project"
          onChange={event =>
            setValuesT(prev => ({ ...prev, link: event.target.value }))}
        />
        <InputControl
          label="Github Link"
          value={valuesT.github}
          placeholder="Enter github link of project"
          onChange={event =>
            setValuesT(prev => ({ ...prev, github: event.target.value }))}
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
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

export default Projects;
