import Board from '../../Components/Board/Board';
import styles from './Home.module.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { applications } from '../../utils/data';
import { useState } from 'react';

export default function Home() {
    const [status, setStatus] = useState(applications);

    const categories = [
        'Interested',
        'Applied',
        'Interviewing',
        'Offered',
        'Rejected',
    ];

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.container}>
                {categories.map((cat, index) => {
                    return (
                        <Board
                            category={cat}
                            key={index}
                            updateStatus={setStatus}
                            applications={status}
                        />
                    );
                })}
            </div>
        </DndProvider>
    );
}
