import { useState } from 'react';
import styles from './Topbar.module.css';

export default function DropDown() {
    const [showMenu, setShowMenu] = useState(false);

    const dropDownHandler = () => {
        setShowMenu(!showMenu);
    };

    return (
        <ul>
            <button className={styles.dropDownButton} onClick={dropDownHandler}>
                Profile
            </button>
            {showMenu && (
                <li className={styles.dropMenu}>
                    <button>Logout</button>
                    <button>random</button>
                </li>
            )}
        </ul>
    );
}
