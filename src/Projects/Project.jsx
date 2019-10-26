import React from 'react';
import styles from './Project.module.css'

function Project() {
	return (
		<div className={styles.project}>
			<div className={styles.picture}>
				Картинка
				<span className={styles.projectTitle}>
					<button className={styles.button}>
						Смотреть
					</button>
				</span>
			</div>
			<span className={styles.projectDescription}>
				Описание
			</span>
		</div>
	);
}

export default Project;
