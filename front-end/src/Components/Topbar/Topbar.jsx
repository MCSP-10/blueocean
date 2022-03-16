import DropDown from './Dropdown';
import styles from './Topbar.module.css';
import { GiBerriesBowl } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export default function Topbar() {
    return (
        <nav className={styles.container}>
            <div className={styles.logoContainer}>
                <Link to={'/home'}>
                    <GiBerriesBowl size={40} color={'black'} />
                </Link>
            </div>
            <div className={styles.crumbContainer}>
                <h1>Gatherer</h1>
            </div>
            <div className={styles.buttonContainer}>
                <DropDown />
            </div>
        </nav>
    );
}
