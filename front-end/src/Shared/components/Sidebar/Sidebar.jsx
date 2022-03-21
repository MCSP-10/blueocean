import { FaHome } from 'react-icons/fa';
import { GoMegaphone } from 'react-icons/go';
import { RiNewspaperLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.container}>
            <Link to={'/applications'}>
                <Button
                    icon={<RiNewspaperLine size={30} color={'#F2EFEB'} />}
                    text="Applications"
                    textColor="offWhite"
                />
            </Link>
            <Link to={'/opportunities'}>
                <Button
                    icon={<GoMegaphone size={30} color={'#F2EFEB'} />}
                    text="Opportunities"
                    textColor="offWhite"
                />
            </Link>
        </div>
    );
}
