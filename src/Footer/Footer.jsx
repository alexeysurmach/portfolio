import React from 'react';
import styles from './Footer.module.css'

function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.block}>
				<div>
					Alexey Surmach
				</div>
				<div className={styles.contacts}>
					<nav> </nav>
					<nav> </nav>
					<nav> </nav>
					<nav> </nav>
				</div>
				<div>
					© 2019 Все права защищены.
				</div>
			</div>
		</div>
	);
}

export default Footer;
