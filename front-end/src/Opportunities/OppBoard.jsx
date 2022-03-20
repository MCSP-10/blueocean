import { useState, useContext } from 'react';
import OppCard from './OppCard';
import Modal from 'Shared/components/Modal/Modal';
import styles from './OppBoard.module.css';
import oppContext from 'Shared/contexts/opportunitiesContext';

export default function OppBoard() {
    const [isOpen, setIsOpen] = useState(false);
    const [appForm, setAppForm] = useState('');
    const { opportunities } = useContext(oppContext);

    return (
        <>
            <div className={styles.container}>
                {opportunities.map((opp) => {
                    return (
                        <OppCard
                            app={opp}
                            key={opp.id}
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
