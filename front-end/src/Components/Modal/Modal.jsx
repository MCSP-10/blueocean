import React from 'react';
import styles from './Modal.module.css';

export default function Modal({ children, open, onClose }) {
    if (!open) return null;

    return (
        <>
            <div className={styles.overlay} />
            <div className={styles.modal_container}>
                <button onClick={onClose} className={styles.close_btn}>
                    Close
                </button>
                <div className={styles.modal_body}>{children}</div>
            </div>
        </>
    );
}
