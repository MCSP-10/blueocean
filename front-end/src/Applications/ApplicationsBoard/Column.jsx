import { BsPlusCircleFill } from 'react-icons/bs';
import { useDrop } from 'react-dnd';
import Modal from 'Shared/components/Modal/Modal';
import AddApplication from 'Applications/AddApplication';
import Card from './Card.jsx';
import styles from 'Applications/styles/ApplicationsBoard.module.css';
import { applicationsContext } from 'Applications';
import { useState, useContext } from 'react';

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

            {items.map(({ company, logo, title, id }) => (
                <Card
                    name={company}
                    logo={logo}
                    subText={title}
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
                element={
                    <AddApplication
                        status={name}
                        afterSubmit={() => setShowModal(false)}
                    />
                }
            />
        </div>
    );
};

export default Column;
