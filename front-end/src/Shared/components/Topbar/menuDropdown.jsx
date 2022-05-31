import { useState } from 'react';
import styles from './Topbar.module.css';
import { Link } from 'react-router-dom';
import Button from 'Shared/components/Button/Button';
import { GoMegaphone } from 'react-icons/go';
import { RiNewspaperLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    const dropDownHandler = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className={styles.menu}>
            <Button 
                // className={style}     
                icon={<GiHamburgerMenu size={50} color={'white'}/>} 
                onClick={dropDownHandler}>
            </Button>
            {showMenu && (
                <div className={styles.dropMenu}>
                <Link to={'/applications'}>
                    <Button
                        icon={<RiNewspaperLine size={30} color={'white'} />}
                        text="Applications"
                        textColor="white"
                    />
                </Link>
                <Link to={'/opportunities'}>
                    <Button
                        icon={<GoMegaphone size={30} color={'white'} />}
                        text="Opportunities"
                        textColor="white"
                    />
                </Link>
                   
                </div>
            )}
            
        </div>
    );
}