import React,{ useContext} from 'react';
import { applicationsContext } from 'Applications';
import closeBtn from 'Shared/assets/closeBtn.svg';
import styles from 'Applications/styles/Card.module.css';



const DeleteApplication = (props) => {
    const { deleteApplication } = useContext(applicationsContext);
    const id = props.task_id
    const deleteTask=async ()=>{
        
        await deleteApplication(id)
    }

    return (
        <button onClick={deleteTask}><img className={styles.delete} src={closeBtn}/></button>
    );
};

export default DeleteApplication;
