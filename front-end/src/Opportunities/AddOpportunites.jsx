import { useState, useContext } from 'react';
import Button from 'Shared/components/Button/Button';
import oppContext from 'Shared/contexts/opportunitiesContext';
import styles from './OppBoard.module.css';

const AddOpportunites = (props) => {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [group_name,setGroup]=useState('')
    const { createOpportunities} = useContext(oppContext);
    const [salary, setSalary]=useState('')
    const [deadline, setDeadline]=useState('')
    const [description, setDescription]=useState('')
    const [location, setLocation]=useState('')


    const passValueTo = (callback) => {
        return (e) => {
            console.log(e.target.value)
            callback(e.target.value);
        };
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        
        if (!company || !position) {
            return;
        }
        const body = { group_name:"MCSP-10", company, job_title: position,salary,deadline,description,location};
        await createOpportunities(body);
        props.afterSubmit();
    };
    return (
        <>
            <h3 className={styles.title}>Add New Application</h3>
            <hr className={styles.lineBreak}></hr>
            <form onSubmit={onSubmit}>
                   <div className={styles.field}>
                    <label htmlFor="company" className={styles.labels}>
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        onChange={passValueTo(setCompany)}
                        className={styles.inputs}
                        placeholder=" "
                    />
                    </div>

                    <div className={styles.field}>
                    <label htmlFor="location" className={styles.labels}>
                    location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        onChange={passValueTo(setLocation)}
                        className={styles.inputs}
                        placeholder=" "
                    />
                    </div>

                <div className={styles.field}>
                    <label htmlFor="description" className={styles.labels}>
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        onChange={passValueTo(setDescription)}
                        className={styles.inputs}
                        placeholder=" "
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="job_title" className={styles.labels}>
                        Position
                    </label>
                    <input
                        type="text"
                        id="job_title"
                        name="job_title"
                        onChange={passValueTo(setPosition)}
                        className={styles.inputs}
                        placeholder=" "
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="salary" className={styles.labels}>
                    salary
                    </label>
                    <input
                        type="number"
                        id="salary"
                        name="salary"
                        onChange={passValueTo(setSalary)}
                        className={styles.inputs}
                        placeholder=" "
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="deadline" className={styles.labels}>
                    deadline
                    </label>
                    <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        onChange={passValueTo(setDeadline)}
                        className={styles.inputs}
                        placeholder=" "
                    />
                </div>
            
                <div className={styles.button}>
                    <Button
                        text="Create Opportunity"
                        color="orange"
                        textColor={'chocolate'}
                    />
                </div>
            </form>
        </>
    );
};

export default AddOpportunites;
