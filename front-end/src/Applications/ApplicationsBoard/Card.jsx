import { useState } from 'react';
import styles from 'Applications/styles/Card.module.css';
import Modal from 'Shared/components/Modal';
import ApplicationDetails from 'Applications/ApplicationDetails';
import { useDrag } from 'react-dnd';

const Card = (props) => {
    // console.log(props)
    const { id, name, subText, url, note } = props;
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
            </div>
            <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
                element={<ApplicationDetails 
                            id={id}
                            name={name}
                            subText={subText}
                            url={url}
                            note={note}
                            image={props.logo}
                             />}
            />
        </>
    );
};

export default Card;
