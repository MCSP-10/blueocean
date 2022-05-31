import { useState, useContext } from 'react';
import OppCard from './OppCard';
import Modal from 'Shared/components/Modal/Modal';
import styles from './OppBoard.module.css';
import oppContext from 'Shared/contexts/opportunitiesContext';
import AddOpportunites from './AddOpportunites.jsx'

export default function OppBoard() {
    const [isOpen, setIsOpen] = useState(false);
    const [appForm, setAppForm] = useState('');
    const { opportunities } = useContext(oppContext);
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className={styles.opportunitiesBoard}>
                <button
                size={30}
                color={'#3c5a68'}
                className={styles.addAppButton}
                onClick={() => setShowModal(true)}
                >Create</button>
                <div className={styles.oppSearch}>
                    <input 
                        className={styles.search} 
                        type="text" 
                        placeholder="   What are you looking for?"             
                        // value={query}
                        // onChange={handleChange}
                        />
                    <button type="submit" className={styles.searchButton}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
            <div className={styles.container}>
                {opportunities.map((opp) => {
                    return (
                        <OppCard
                            app={opp}
                            key={opp.id}
                            id={opp.id}
                            setIsOpen={setIsOpen}
                            setAppForm={setAppForm}
                            
                        />
                    );
                })}
                <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
                element={
                    <AddOpportunites
                        afterSubmit={() => setShowModal(false)}
                    />
                }
            />
            </div>  
        </>
    );
}
