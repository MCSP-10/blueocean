import React, { useState } from 'react';
import Comments from './Comments';
import styles from './Form.module.css';

export default function Form({ app }) {
    const [inputs, setInputs] = useState(app);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send patch/post request returning updated application
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs((values) => ({ ...values, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.form_main}>
                <img src={inputs.logo} alt="" className={styles.logo} />

                <label className={styles.company_name}>
                    Company Name*
                    <input
                        type="text"
                        name="company"
                        value={inputs.company}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.job_title}>
                    Job Title*
                    <input
                        type="text"
                        name="job_title"
                        value={inputs.job_title}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.location}>
                    Location
                    <input
                        type="text"
                        value={inputs.location}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.deadline}>
                    Deadline
                    <input
                        type="text"
                        value={inputs.deadline}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.salary}>
                    Salary
                    <input
                        type="text"
                        value={inputs.salary}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.status}>
                    Status
                    <input
                        type="text"
                        name="status"
                        value={inputs.status}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.url}>
                    URL
                    <input
                        type="text"
                        value={inputs.url}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.description}>
                    Description
                    <textarea
                        type="text"
                        value={inputs.description}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.updates}>
                    Updates
                    <textarea
                        type="text"
                        value={inputs.updates}
                        rows={5}
                        onChange={handleChange}
                    />
                </label>

                <input
                    type="submit"
                    value={'Save'}
                    className={styles.save_btn}
                />
            </div>

            <div className={styles.form_comments}>
                <Comments comments={inputs.comments} />
            </div>
        </form>
    );
}
