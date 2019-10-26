import React from 'react';
import styles from './Projects.module.css'
import Project from "./Project";

function Projects() {
	return (
		<div className={styles.header}>
			<div className={styles.block}>
				<div className={styles.top}>
					Мои работы
				</div>
				<div className={styles.projects}>
					<Project />
					<Project />
				</div>
			</div>
		</div>
	);
}

export default Projects;
