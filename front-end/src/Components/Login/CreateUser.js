import React from 'react';
import css from './CreateUser.module.css';

export default function CreateUser() {
    return (
        <div className={css.page}>
            <div className={css.container}>
                <h1 className={css.title}>Create User </h1>
                <form className={css.form}>
                    <input
                        className={css.input}
                        type="text"
                        name="Fname"
                        placeholder="First Name"
                    />

                    <input
                        className={css.input}
                        type="text"
                        name="Lname"
                        placeholder="Last Name"
                    />

                    <input
                        className={css.input}
                        type="text"
                        name="Email"
                        placeholder="Email"
                    />

                    <input
                        className={css.input}
                        type="text"
                        name="Password"
                        placeholder="Password"
                    />

                    <input
                        className={css.input}
                        type="text"
                        name="ConfirmPassword"
                        placeholder="Confirm Password"
                    />

                    <label>
                        Choose a role
                        <select name="roles">
                            <option value="Admin">Admin</option>
                            <option value="Job Seeker">Job Seeker</option>
                        </select>
                    </label>
                    <input
                        className={css.btn}
                        type="menu"
                        value="Create User"
                    />
                </form>
            </div>
        </div>
    );
}
