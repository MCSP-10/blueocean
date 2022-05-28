import { useState, useContext } from 'react';
import Button from 'Shared/components/Button/Button';
import { applicationsContext } from 'Applications';
import styles from './AddApplication.module.css';

const AddApplication = (props) => {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [status, setStatus] = useState(props.status);
    const { createApplication } = useContext(applicationsContext);

    const passValueTo = (callback) => {
        return (e) => {
            callback(e.target.value);
        };
    };
    const onSubmit = async (e) => {
        
        
        e.preventDefault();   
        if (!company || !position) {
            return;
        }
        const body = { company, job_title: position, status };
        await createApplication(body);

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
                <label className={styles.dropDown}> STATUS: </label>
                <select
                    className={styles.selects}
                    id="status"
                    name="status"
                    defaultValue={status}
                >
                    <option value="Interested">Interested</option>
                    <option value="Applying">Applying</option>
                    <option value="Phone Interview">Phone Interview</option>
                    <option value="Technical Interview">Technical Interview</option>
                    <option value="Final Interview">Final Interview</option>
                    <option value="Offered">Offered</option>
                    <option value="Rejected">Rejected</option>
                </select>
                <br />
                <br />
                <div className={styles.button}>
                    <Button
                        text="Create Application"
                        color="orange"
                        textColor={'chocolate'}
                    />
                </div>
            </form>
        </>
    );
};

export default AddApplication;
