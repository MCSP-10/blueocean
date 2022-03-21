import DropDown from './Dropdown';
import styles from './Topbar.module.css';
import { GiBerriesBowl } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Button from 'Shared/components/Button/Button';
import { useAuth } from 'Shared/services/Auth.js';
import logo from 'Shared/assets/cazadorLogo.svg';

export default function Topbar() {
    const { logout } = useAuth();
    const today = new Date();

    const quote = [
        `“If you spend too much time thinking about a thing, you’ll never get it done.” – Bruce Lee`,
        `“The future depends on what you do today.” – Mahatma Gandhi`,
        `“It always seems impossible until it’s done.” —Nelson Mandela`,
        `“You miss 100% of the shots you don’t take.” – Wayne Gretzky`,
        `“Never put off till tomorrow what you can do today.” – Thomas Jefferson`,
        `“Every strike brings me closer to the next home run.” —Babe Ruth`,
        `“A person who never made a mistake never tried anything new.” – Albert Einstein`,
    ];

    return (
        <nav className={styles.container}>
            <Link to={'/home'}>
                <img src={logo} className={styles.logo}></img>
            </Link>
            <h1 className={styles.title}>{quote[today.getDay()]}</h1>
            <Button
                text="Logout"
                onClick={logout}
                color="mainBlue"
                textColor="offWhite"
            />
        </nav>
    );
}
