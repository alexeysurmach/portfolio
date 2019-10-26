import React from 'react';
import styles from './DistantWork.module.css'

function DistantWork() {
	return (
		<div className={styles.header}>
			<div className={styles.block}>
				<div>
					Рассматриваю варианты удаленной работы
				</div>
				<div>
					<button className={styles.button}>
						Нанять меня
					</button>
				</div>
			</div>
		</div>
	);
}

export default DistantWork;
