import { useState } from 'react';
import styles from 'Applications/styles/Card.module.css';
import Modal from 'Shared/components/Modal';
import ApplicationDetails from 'Applications/ApplicationDetails';
import { useDrag } from 'react-dnd';
import DeleteApplication from '../DeleteApplication';

const Card = (props) => {
    const { id } = props;
    const [showModal, setShowModal] = useState(false);
    const [{ isDragging }, drag] = useDrag({
        type: 'card',
        item: { id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <>
            <div
                className={styles.component}
                onClick={() => setShowModal(true)}
                style={{
                    opacity: isDragging ? 0.6 : 1,
                }}
                ref={drag}
            >
                <img className={styles.logo} src={props.logo} />
                <h3 className={styles.companyName}>{props.name}</h3>
                <h3 className={styles.subText}>{props.subText}</h3>
                <DeleteApplication className="delete" task_id={id}  />
            </div>
            <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
                element={<ApplicationDetails id={id} />}
            />
        </>
    );
};

export default Card;
