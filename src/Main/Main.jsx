import React from 'react';
import styles from './Main.module.css'

function Main() {
	return (
		<div className={styles.header}>
			<div className={styles.block}>
				<div className={styles.greeting}>
					<span> Привет) </span>
					<span> Меня зовут Алексей </span>
					<span> Я робот :) </span>
				</div>
				<div className={styles.photo}> </div>
			</div>
		</div>
	);
}

export default Main;
