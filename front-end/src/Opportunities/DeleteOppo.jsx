import React,{ useContext} from 'react';
// import { opportunitiesContext } from './opportunitiesContext.jsx';
import closeBtn from 'Shared/assets/closeBtn.svg';
import styles from 'Applications/styles/Card.module.css';
import oppContext from 'Shared/contexts/opportunitiesContext';


const DeleteOppo = (props) => {
    const { deleteOpportunities } = useContext
    (oppContext );
    
    const id = props.id

   const abc=(async()=>{
            const deleteTask=await deleteOpportunities(id)
            }
)

    return (
        <button onClick={(()=>{abc()})}><img className={styles.delete} src={closeBtn}/></button>
    );
};

export default DeleteOppo;
