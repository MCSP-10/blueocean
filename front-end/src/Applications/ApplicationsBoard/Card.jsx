import { useState,useEffect } from 'react';
import styles from 'Applications/styles/Card.module.css';
import Modal from 'Shared/components/Modal';
import ApplicationDetails from 'Applications/ApplicationDetails';
import { useDrag } from 'react-dnd';
import DeleteApplication from '../DeleteApplication';

const Card = (props) => {

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
              
                style={{
                    opacity: isDragging ? 0.6 : 1,
                }}
                ref={drag}
            >
                <div className="card-header">
                    <img className={styles.cardLogo} src={props.logo} />
                    <DeleteApplication className={styles.delete} task_id={id}  />
                </div>
                <span  data-testid="app-card"
                  onClick={() => setShowModal(true)}>
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
