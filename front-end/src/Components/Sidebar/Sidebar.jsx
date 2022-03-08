import { FaHome } from 'react-icons/fa';
import { GoMegaphone } from 'react-icons/go';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.homeBtn}>
                <Link to={'/home'}>
                    <FaHome size={40} color={'white'} />
                </Link>
            </div>
            <div className={styles.oppBtn}>
                <Link to={'/opportunities'}>
                    <GoMegaphone size={40} color={'white'} />
                </Link>
            </div>
        </div>
    );
}
