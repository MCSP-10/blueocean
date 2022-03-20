import { useRef, useState } from 'react';
import Button from 'Shared/components/Button/Button';
import { useNavigate, Navigate } from 'react-router-dom';
import Auth, { useAuth } from 'Shared/services/Auth';
import styles from './Login.module.css';

const Login = (props) => {
    const navigate = useNavigate();
    const { isLoggedIn, login } = useAuth();

    const [incorrectAttempt, setIncorrectAttempt] = useState(false);
    const emailRef = useRef();
    const passRef = useRef();

    const onSubmit = async () => {
        const ok = await login(emailRef.current.value, passRef.current.value);
        if (!ok) return setIncorrectAttempt(true);
        navigate('/');
    };
    return isLoggedIn ? (
        <Navigate to="/" />
    ) : (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.title}>Gatherer</h1>
                <form className={styles.form}>
                    <label className={styles.email}>
                        Email
                        <input
                            type="text"
                            placeholder="Enter email"
                            ref={emailRef}
                        />
                    </label>
                    <label className={styles.password}>
                        Password
                        <input
                            type="text"
                            placeholder=" Enter password"
                            ref={passRef}
                        />
                    </label>
                </form>
                <p
                    className={styles.incorrectMessage}
                    style={{
                        visibility: incorrectAttempt ? 'visible' : 'hidden',
                    }}
                >
                    Incorrect Credentials
                </p>
                <Button text="Login" onClick={onSubmit} color="cyan" />
            </div>
        </div>
    );
};

export default Login;
