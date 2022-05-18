import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useContext } from 'react';
import { applicationsContext } from 'Applications';
import Column from './Column.jsx';
import styles from 'Applications/styles/ApplicationsBoard.module.css';
import useApplications from 'Applications/useApplications';

export default function Board() {
    const { data, status } = useApplications();
    const { applications } = useContext(applicationsContext);
    const columns = [
        'Interested',
        'Applying',
        'Phone Interview',
        'Technical Interview',
        'Final Interview',
        'Offered',
        'Rejected',
    ];
    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.component}>
                {columns.map((col, i) => (
                    <Column
                        name={col}
                        items={applications.filter(
                            (apps) => apps.status === col
                        )}
                        key={col}
                    />
                ))}
            </div>
        </DndProvider>
    );
}
