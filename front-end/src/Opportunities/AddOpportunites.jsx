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
        const body = { group_name, company, job_title: position,salary,deadline,description,location};
        console.log(body)
        await createOpportunities(body);
        props.afterSubmit();
    };
    return (
        <>
            <h3 className={styles.title}>Add New Application</h3>
            <hr className={styles.lineBreak}></hr>
            <form onSubmit={onSubmit}>
                <div className={styles.field}>
                    <input
                        type="text"
                        id="group"
                        name="group"
                        onChange={passValueTo(setGroup)}
                        placeholder=" "
                    />
                    <label htmlFor="group_name" className={styles.labels}>
                        Group name
                    </label>
                </div>

                <div className={styles.field}>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        onChange={passValueTo(setCompany)}
                        className={styles.inputs}
                        placeholder=" "
                    />
                    <label htmlFor="company" className={styles.labels}>
                        Company Name
                    </label>
                    </div>

                    <div className={styles.field}>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        onChange={passValueTo(setLocation)}
                        className={styles.inputs}
                        placeholder=" "
                    />
                    <label htmlFor="location" className={styles.labels}>
                    location
                    </label>
                    </div>

                <div className={styles.field}>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        onChange={passValueTo(setDescription)}
                        className={styles.inputs}
                        placeholder=" "
                    />
                    <label htmlFor="description" className={styles.labels}>
                         Description
                    </label>
                </div>

                <div className={styles.field}>
                    <input
                        type="text"
                        id="job_title"
                        name="job_title"
                        onChange={passValueTo(setPosition)}
                        className={styles.inputs}
                        placeholder=" "
                    />
                    <label htmlFor="job_title" className={styles.labels}>
                        Position
                    </label>
                </div>

                <div className={styles.field}>
                    <input
                        type="number"
                        id="salary"
                        name="salary"
                        onChange={passValueTo(setSalary)}
                        className={styles.inputs}
                        placeholder=" "
                    />
                    <label htmlFor="salary" className={styles.labels}>
                    salary
                    </label>
                </div>

                <div className={styles.field}>
                    <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        onChange={passValueTo(setDeadline)}
                        className={styles.inputs}
                        placeholder=" "
                    />
                    <label htmlFor="deadline" className={styles.labels}>
                    deadline
                    </label>
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
