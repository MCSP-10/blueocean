import DropDown from './Dropdown';
import styles from './Topbar.module.css';
import { GiBerriesBowl } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Button from 'Shared/components/Button/Button';
import { useAuth } from 'Shared/services/Auth.js';

export default function Topbar() {
    const { logout } = useAuth();
    return (
        <nav className={styles.container}>
            <Link to={'/home'}>
                <GiBerriesBowl size={40} color={'black'} />
            </Link>
            <h1>Gatherer</h1>
            <Button
                text="Logout"
                onClick={logout}
                color="black"
                textColor="white"
            />
        </nav>
    );
}
