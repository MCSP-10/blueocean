import { useState, useContext } from 'react';
import styles from './OppBoard.module.css';
import DeleteOppo from './DeleteOppo';
import AppOppoDetail from './AddOppoDetail';
import Modal from 'Shared/components/Modal/Modal';

export default function OppCard({ app, setIsOpen, setAppForm }) {
    const [showModal, setShowModal] = useState(false);
    let id=app.id;
    console.log(app)

    return (
        <>
        <div
            className={styles.oppCard}
            >
            <div className={styles.logo_div}></div>
            <span  onClick={() => {
                setShowModal(true)
                setIsOpen(true);
                setAppForm(app);
                }}
                >
            <h1>{app.company}</h1>
            <h3>{app.title}</h3></span>
            <div className={styles.info_div}>
                <DeleteOppo className={styles.delete} id={id}  />
            </div>
        </div>
        <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
                element={<AppOppoDetail
                            name={app.company}
                            group={app.group}
                            deadline={app.deadline}
                            location={app.location}
                            salary={app.salary}
                            descript={app.descript}
                             />}
            /> 
        </>

    );
}
