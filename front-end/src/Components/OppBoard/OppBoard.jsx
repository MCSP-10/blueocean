import { useState } from 'react';
import OppCard from './OppCard';
import Modal from '../Modal/Modal';
import styles from './OppBoard.module.css';
import { applications } from '../../utils/data';

export default function OppBoard() {
    const [isOpen, setIsOpen] = useState(false);
    const [appForm, setAppForm] = useState('');

    return (
        <>
            <div className={styles.container}>
                {applications.map((app) => {
                    return (
                        <OppCard
                            app={app}
                            key={app.id}
                            setIsOpen={setIsOpen}
                            setAppForm={setAppForm}
                        />
                    );
                })}
                <Modal
                    open={isOpen}
                    onClose={() => {
                        setIsOpen(false);
                        setAppForm('');
                    }}
                >
                    <h1>{appForm.company}</h1>
                    <h2>{appForm.job_title}</h2>
                </Modal>
            </div>
        </>
    );
}
