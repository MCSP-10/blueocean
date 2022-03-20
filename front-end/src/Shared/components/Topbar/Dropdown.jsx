import { useState } from 'react';
import styles from './Topbar';

export default function DropDown() {
    const [showMenu, setShowMenu] = useState(false);

    const dropDownHandler = () => {
        setShowMenu(!showMenu);
    };

    return (
        <ul>
            <button className={styles.dropDownButton} onClick={dropDownHandler}>
                Logout
            </button>
            {/* {showMenu && (
                <li className={styles.dropMenu}>
                    <button>Logout</button>
                </li>
            )} */}
        </ul>
    );
}
