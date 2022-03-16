import { useState } from 'react';
import styles from './Board.module.css';
import { BsPlusCircleFill } from 'react-icons/bs';
import JobCard from './JobCard';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';
import { useDrop } from 'react-dnd';

export default function Board({ category, applications, updateStatus }, props) {
    const [isOpen, setIsOpen] = useState(false);
    const [appForm, setAppForm] = useState('');

    const [{ isOver }, drop] = useDrop({
        accept: 'card',
        drop: (item, monitor) => changeStatus(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    const changeStatus = (item) => {
        const newArr = [...applications];
        for (let i = 0; i < newArr.length; i++) {
            const current = newArr[i];
            if (current.id === item.id) {
                current.status = category;
            }
        }
        updateStatus(newArr);
    };

    return (
        <div className={styles.container} ref={drop}>
            {/* {isOver? category : console.log('not working')}  */}
            <h1 className={styles.title}>{category}</h1>
            <BsPlusCircleFill
                size={30}
                color={'grey'}
                className={styles.addBtn}
                onClick={() => setIsOpen(true)}
            />

            <Modal
                open={isOpen}
                onClose={() => {
                    setIsOpen(false);
                    setAppForm('');
                }}
            >
                <Form app={appForm} />
            </Modal>

            {/* {props.children} */}

            {applications.map((app, index) => {
                return (
                    app.status === category && (
                        <JobCard
                            app={app}
                            id={app.id}
                            key={index}
                            setIsOpen={setIsOpen}
                            setAppForm={setAppForm}
                        />
                    )
                );
            })}
        </div>
    );
}
