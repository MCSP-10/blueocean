import DropDown from './Dropdown';
import styles from './Topbar.module.css';

import { useState } from 'react';

export default function Topbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>LOGO</div>
            <div className={styles.crumbContainer}>
                <h1 className={styles.breadcrumb}>Current View</h1>
            </div>
            <div className={styles.buttonContainer}>
                <DropDown toggling={toggling} isOpen={isOpen}></DropDown>
            </div>
        </div>
    );
}
