import { useState,useEffect } from 'react';
import styles from 'Applications/styles/Card.module.css';
import Modal from 'Shared/components/Modal';
import ApplicationDetails from 'Applications/ApplicationDetails';
import { useDrag } from 'react-dnd';
import DeleteApplication from '../DeleteApplication';

const Card = (props) => {
    // console.log(props)
    const { id, name, subText, url, note } = props;
    const [showModal, setShowModal] = useState(false);
    // console.log(showModal);
    const [{ isDragging }, drag] = useDrag({
        type: 'card',
        item: { id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    // console.log(props);

    return (
        <>
            <div
                data-testid="app-card"
                className={styles.component}
                onClick={() => setShowModal(true)}
                style={{
                    opacity: isDragging ? 0.6 : 1,
                }}
                ref={drag}
            >
                <div className="card-header">
                    <img className={styles.cardLogo} src={props.logo} />
                    <DeleteApplication className={styles.delete} task_id={id}  />
                </div>
                <span>
                    <h3 className={styles.companyName}>{props.name}</h3>
                    <h3 className={styles.subText}>{props.subText}</h3>
                </span>
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
