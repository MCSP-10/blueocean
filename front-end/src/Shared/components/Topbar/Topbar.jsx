import DropDown from './Dropdown';
import styles from './Topbar.module.css';
import { GiBerriesBowl } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Button from 'Shared/components/Button/Button';
import { useAuth } from 'Shared/services/Auth.js';
import logo from 'Shared/assets/cazadorLogo.svg';
import { GoMegaphone } from 'react-icons/go';
import { RiNewspaperLine } from 'react-icons/ri';
import Menu from './menuDropdown';

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
            <div className={styles.leftContainer}>
                <div className={styles.dropMenuContainer}>
                    <Menu/>
                </div>

                <Link to={'/home'}>
                    <img src={logo} className={styles.logo}></img>
                </Link>
            </div>
            <Button 
                className={styles.button}            
                text="Logout"
                onClick={logout}
                color='#F79020'
                borderColor='white'
                borderSize='1px solid'
                textColor="white"
            />
        </nav>
    );
}
