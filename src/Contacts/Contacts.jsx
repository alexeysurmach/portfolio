import React from 'react';
import styles from './Contacts.module.css'

function Contacts() {
    return (
        <div className={styles.header}>
            <div className={styles.block}>
                <div>
                    Контакты
                </div>
                <div className={styles.contacts}>
                    <input type='text'/>
                    <input type='text'/>
                    <textarea name ='' id=''> </textarea>
                </div>
                <div className={styles.content}>
                    <button className={styles.button}>
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
