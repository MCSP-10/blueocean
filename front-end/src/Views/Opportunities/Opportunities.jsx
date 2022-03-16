import OppBoard from '../../Components/OppBoard/OppBoard';
import styles from './Opportunities.module.css';

export default function Opportunities(props) {
    return (
        <div className={styles.container}>
            <OppBoard />
        </div>
    );
}
