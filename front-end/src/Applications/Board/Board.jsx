import { useState, useContext } from 'react';
import styles from './Board.module.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { applications } from 'Shared/utils/data';
import { BsPlusCircleFill } from 'react-icons/bs';
import applicationsContext from 'Applications/context';

const Card = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.logo} />
            <h3>{props.name}</h3>
            <h3>{props.subText}</h3>
        </div>
    );
};
const Column = (props) => {
    const { name, items } = props;
    return (
        <div className={styles.column}>
            <h2 className={styles.columnTitle}>{name}</h2>
            <BsPlusCircleFill size={30} color={'grey'} />

            {items.map(({ company, logo, job_title, id }) => (
                <Card name={company} logo={logo} subText={job_title} key={id} />
            ))}
        </div>
    );
};
export default function Board() {
    const columns = [
        'Interested',
        'Applied',
        'Interviewing',
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
                        key={i}
                    />
                ))}
            </div>
        </DndProvider>
    );
}
