import React from 'react';
import styles from './Modal.module.css';

export default function Modal({ element, open, onClose }) {
    if (!open) return null;

    return (
        <>
            <div className={styles.overlay} />
            <div className={styles.modal_container}>
                <div className={styles.topBar}>
                    <button onClick={onClose} className={styles.close_btn}>
                        Close
                    </button>
                </div>
                <div className={styles.modal_body}>{element}</div>
            </div>
        </>
    );
}
