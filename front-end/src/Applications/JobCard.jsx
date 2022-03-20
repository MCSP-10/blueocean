import styles from './Board.module.css';
import { useDrag } from 'react-dnd';

export default function JobCard({ app, setIsOpen, setAppForm, id }) {
    const [{ isDragging }, drag] = useDrag({
        type: 'card',
        item: {
            state: app.status,
            id: app.id,
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            style={{ opacity: isDragging ? '-1' : '2' }}
            className={styles.jobCard}
            onClick={() => {
                setIsOpen(true);
                setAppForm(app);
            }}
        >
            <div className={styles.jobCard_Logo}>
                <img src={app.logo} alt="" />
            </div>
            <div className={styles.jobCard_Info}>
                <h3>{app.company}</h3>
                <p>{app.job_title}</p>
            </div>
        </div>
    );
}
