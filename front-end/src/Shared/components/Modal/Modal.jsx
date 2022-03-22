import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import closeBtn from 'Shared/assets/closeBtn.svg';

export default function Modal({ element, open, onClose }) {
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className={styles.overlay} onClick={onClose} />
            <div className={styles.container}>
                <div className={styles.topBar}>
                    <button onClick={onClose} className={styles.close_btn}>
                        <img
                            className={styles.closeBtnImg}
                            src={closeBtn}
                        ></img>
                    </button>
                </div>
                <div className={styles.body}>{element}</div>
            </div>
        </>,
        document.getElementById('root')
    );
}
