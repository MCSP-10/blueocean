import React,{ useContext} from 'react';
import { applicationsContext } from 'Applications';




const DeleteApplication = (props) => {
    const { deleteApplication } = useContext(applicationsContext);
    const deleteTask=async (e)=>{
        const id = props.task_id
        console.log(id)
        await deleteApplication(id)
    }
  
        

    return (
        <button className='delete' onClick={deleteTask}><img src="https://cdn-icons-png.flaticon.com/128/3221/3221803.png"/></button>
    );
};

export default DeleteApplication;
