import React from 'react';
import styles from './Login.module.css';

export default function Login() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.title}>Gatherer</h1>
                <input
                    className={styles.googleBtn}
                    type="button"
                    value="Sign in with Google"
                />
                <h5>OR</h5>

                <form className={styles.form}>
                    <label className={styles.email}>
                        Email
                        <input type="text" placeholder="Enter email" />
                    </label>
                    <label className={styles.password}>
                        Password
                        <input type="text" placeholder=" Enter password" />
                    </label>
                </form>
                <div className={styles.links}>
                    <a className={styles.createLink} href="/createuser">
                        Create an Account
                    </a>
                    <a className={styles.passwordLink}> Forgot password ?</a>
                </div>
                <input
                    className={styles.loginBtn}
                    type="button"
                    value="Login "
                />
            </div>
        </div>
    );
}
