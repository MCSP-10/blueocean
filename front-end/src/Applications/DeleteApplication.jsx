import React,{ useContext} from 'react';
import { applicationsContext } from 'Applications';
import closeBtn from 'Shared/assets/closeBtn.svg';



const DeleteApplication = (props) => {
    const { deleteApplication } = useContext(applicationsContext);
    const id = props.task_id
    const deleteTask=async ()=>{
        
        await deleteApplication(id)
    }

    return (
        <button className="delete" onClick={deleteTask}><img className="delete" src={closeBtn}/></button>
    );
};

export default DeleteApplication;
