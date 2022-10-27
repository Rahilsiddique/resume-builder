import React, { useRef, useState } from "react"
import ReactToPrint from "react-to-print"
import { ArrowDown } from "react-feather"

import Editor from "../Editor/Editor"
import Resume from "../Resume/Resume"

import styles from "./Body.module.css"

function Body() {
	const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"]
	const fonts = ["Open Sans", "Montserrat", "Poppins", "Nunito"]
	const sections = {
		basicInfo: "Basic Info",
		workExp: "Work Experience",
		project: "Projects",
		education: "Education",
		achievement: "Achievements",
		summary: "Summary",
		other: "Other",
	}
	const resumeRef = useRef()

	const [activeColor, setActiveColor] = useState(colors[0])
	const [activeFont, setActiveFont] = useState(fonts[0])
	const [resumeInformation, setResumeInformation] = useState({
		[sections.basicInfo]: {
			id: sections.basicInfo,
			sectionTitle: sections.basicInfo,
			detail: {},
		},
		[sections.workExp]: {
			id: sections.workExp,
			sectionTitle: sections.workExp,
			details: [],
		},
		[sections.project]: {
			id: sections.project,
			sectionTitle: sections.project,
			details: [],
		},
		[sections.education]: {
			id: sections.education,
			sectionTitle: sections.education,
			details: [],
		},
		[sections.achievement]: {
			id: sections.achievement,
			sectionTitle: sections.achievement,
			points: [],
		},
		[sections.summary]: {
			id: sections.summary,
			sectionTitle: sections.summary,
			detail: "",
		},
		[sections.other]: {
			id: sections.other,
			sectionTitle: sections.other,
			detail: "",
		},
	})

	// Check if resume is filled or not
	const isResumeFilled = () => {
		const basicInfo = Object.keys(resumeInformation[sections.basicInfo].detail)
		const workExp = Object.keys(resumeInformation[sections.workExp].details)
		const project = Object.keys(resumeInformation[sections.project].details)
		const education = Object.keys(resumeInformation[sections.education].details)
		const achievement = Object.keys(resumeInformation[sections.achievement].points)
		const summary = resumeInformation[sections.summary].detail
		const other = resumeInformation[sections.other].points

		if (basicInfo.length === 0 || workExp.length === 0 || project.length === 0 || education.length === 0 || achievement.length === 0 || summary.length === 0 || other.length === 0) {
			return true;
		} else {
			return false;
		}
	}

	return (
		<div className={styles.container}>
			<p className={styles.heading}>Resume Builder</p>
			<div className={styles.toolbar}>
				<div className={styles.colors}>
					{colors.map(item => (
						<span
							key={item}
							style={{ backgroundColor: item }}
							className={`${styles.color} ${activeColor === item ? styles.active : ""}`}
							onClick={() => setActiveColor(item)}
						/>
					))}
				</div>
				<div className={styles.fonts}>
					{fonts.map(item => (
						<span
							key={item}
							className={`${styles.fonts} ${activeFont === item ? styles.active : ""}`}
							onClick={() => setActiveFont(item)}>
							{item}
						</span>
					))}
				</div>
				<ReactToPrint
					trigger={() => {
						return (
							<button style={{cursor: `${isResumeFilled()? "default": ""}`}} disabled={isResumeFilled()}>
								Download <ArrowDown />
							</button>
						)
					}}
					content={() => resumeRef.current}
				/>
			</div>
			<div className={styles.main}>
				<Editor sections={sections} information={resumeInformation} setInformation={setResumeInformation} />
				<Resume
					ref={resumeRef}
					sections={sections}
					information={resumeInformation}
					activeColor={activeColor}
					activeFont={activeFont}
				/>
			</div>
		</div>
	)
}

export default Body
