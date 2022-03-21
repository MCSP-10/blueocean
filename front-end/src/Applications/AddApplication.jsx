import { useState, useContext } from 'react';
import Button from 'Shared/components/Button/Button';
import { applicationsContext } from 'Applications';

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
        <form onSubmit={onSubmit}>
            <label> Company Name: </label>
            <input
                type="text"
                id="company"
                name="company"
                onChange={passValueTo(setCompany)}
            />
            <br />
            <label> Position: </label>
            <input
                type="text"
                id="job_title"
                name="job_title"
                onChange={passValueTo(setPosition)}
            />
            <br />
            <label> Status: </label>
            <select id="status" name="status" defaultValue={status}>
                <option value="Interested">Interested</option>
                <option value="Applying">Applying</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Offered">Offered</option>
                <option value="Rejected">Rejected</option>
            </select>
            <Button text="Create Application" color="white" />
        </form>
    );
};

export default AddApplication;
