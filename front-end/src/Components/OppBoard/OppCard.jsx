import styles from './OppBoard.module.css';

export default function OppCard({ app, setIsOpen, setAppForm }) {
    return (
        <div
            className={styles.oppCard}
            onClick={() => {
                setIsOpen(true);
                setAppForm(app);
            }}
        >
            <div className={styles.logo_div}>
                <img src={app.logo} alt={app.company} />
            </div>
            <div className={styles.info_div}>
                <h1>{app.company}</h1>
                <h3>{app.job_title}</h3>
            </div>
        </div>
    );
}
