import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BsPlusCircleFill } from 'react-icons/bs';
import Modal from 'Shared/components/Modal/Modal';
import { useState, useContext } from 'react';
import applicationsContext from 'Applications/context/applicationsContext';
import styles from './Board.module.css';

const Card = (props) => {
    const { id } = props;
    const [{ isDragging }, drag] = useDrag({
        type: 'card',
        item: { id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            className={styles.card}
            style={{
                opacity: isDragging ? 0.6 : 1,
            }}
            ref={drag}
        >
            <img src={props.logo} />
            <h3>{props.name}</h3>
            <h3>{props.subText}</h3>
        </div>
    );
};
const Column = (props) => {
    const { name, items } = props;
    const { changeStatus } = useContext(applicationsContext);
    const [showModal, setShowModal] = useState(false);

    const [{ isOver }, drop] = useDrop({
        accept: 'card',
        drop: ({ id }, monitor) => changeStatus(id, name),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    return (
        <div className={styles.column} ref={drop}>
            <h2 className={styles.columnTitle}>{name}</h2>
            <BsPlusCircleFill
                size={30}
                color={'grey'}
                className={styles.addAppButton}
                onClick={() => setShowModal(true)}
            />

            {items.map(({ company, logo, jobTitle, id }) => (
                <Card
                    name={company}
                    logo={logo}
                    subText={jobTitle}
                    key={id}
                    id={id}
                />
            ))}
            {isOver ? (
                <div className={styles.card} style={{ opacity: 0.6 }}></div>
            ) : (
                <></>
            )}
            <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
                element={<h1>sad</h1>}
            />
        </div>
    );
};
export default function Board() {
    const { applications } = useContext(applicationsContext);
    const columns = [
        'Interested',
        'Applying',
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
                        key={col}
                    />
                ))}
            </div>
        </DndProvider>
    );
}
