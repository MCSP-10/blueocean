import React from 'react';
import { useRef, useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import Auth, { useAuth } from 'Shared/services/Auth';
import logo from 'Shared/assets/cazadorLogo.svg';
import styles from './Login.module.css';
import Api from 'Shared/utils/Api';

export default function RegLogin() {
    const navigate = useNavigate();
    const { isLoggedIn, login } = useAuth();
    const {register} = useAuth();

    const [incorrectAttempt, setIncorrectAttempt] = useState(false);
    const [incorrectRegisterAttempt, setIncorrectRegisterAttempt] =
        useState();
    const signinEmailRef = useRef();
    const signinPassRef = useRef();

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const registerEmailRef = useRef();
    const registerPasswordRef = useRef();
    const [registerRole, setRegisterRole] = useState('jobseeker');

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        console.log([
            firstNameRef.current.value,
            lastNameRef.current.value,
            registerEmailRef.current.value,
            registerPasswordRef.current.value,
            registerRole,
        ]);
        const ok = await Api.register.register(firstNameRef.current.value, lastNameRef.current.value, registerEmailRef.current.value, registerPasswordRef.current.value, registerRole)
        console.log(ok, 'this is OKAY')
        if(!ok) {
            alert('Registration status: Failed, make sure input fields are correct')
            navigate('/')
            return setIncorrectRegisterAttempt(true)
        }
       if(ok){
           alert('Registration status: Success')
         navigate('/')
       }
    };

    const handleSignInSubmit = async (e) => {
        e.preventDefault();
        const ok = await login(
            signinEmailRef.current.value,
            signinPassRef.current.value
        );
        if (!ok) return setIncorrectAttempt(true);
        navigate('/');
    };

    const [showSignin, setShowSignin] = useState(false);

    const toggleContainer = () => {
        if (showSignin) {
            setShowSignin(false);
        } else {
            setShowSignin(true);
        }
    };

    return (
        <div className={styles.loginCage}>
            <img src={logo} className={styles.logo}></img>
            <div
                className={
                    `${styles.container}  ` +
                    (showSignin
                        ? `${styles.rightPanelActive}`
                        : `${styles.nothing}`)
                }
            >
                <div
                    className={`${styles.formContainer} ${styles.signUpContainer}`}
                >
                    <form action="#" className={styles.forms}>
                        <h1 className={`${styles.headers} ${styles.h1s}`}>
                            Create Account
                        </h1>
                        <div>
                            <input
                                className={styles.inputs}
                                type="text"
                                placeholder="First Name.."
                                ref={firstNameRef}
                            />
                        </div>
                        <div>
                            <input
                                className={styles.inputs}
                                type="text"
                                placeholder="Last Name.."
                                ref={lastNameRef}
                            />
                        </div>
                        <div>
                            <input
                                className={styles.inputs}
                                type="text"
                                placeholder="Email.."
                                ref={registerEmailRef}
                            />
                        </div>
                        <div>
                            <input
                                className={styles.inputs}
                                type="password"
                                placeholder="Password.."
                                ref={registerPasswordRef}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="role"
                                className={styles.labelDropDown}
                            >
                                Choose a role:
                                <select
                                    name="role"
                                    id="role"
                                    onChange={(e) =>
                                        setRegisterRole(e.target.value)
                                    }
                                    className={styles.selectDropDown}
                                >
                                    <option value="jobseeker">Jobseeker</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </label>
                        </div>
                        <p
                            className={styles.incorrectMessage}
                            style={{
                                visibility: incorrectRegisterAttempt
                                    ? 'visible'
                                    : 'hidden',
                            }}
                        >
                            Failed to register/Incomplete Form
                        </p>
                        <button
                            onClick={handleSignUpSubmit}
                            className={`${styles.buttons} ${styles.submitBtn}`}
                        >
                            Register
                        </button>
                    </form>
                </div>
                <div
                    className={`${styles.formContainer} ${styles.signInContainer}`}
                >
                    <form action="/" className={styles.forms}>
                        <h1 className={`${styles.headers} ${styles.h1s}`}>
                            Sign in
                        </h1>
                        <div>
                            <input
                                className={styles.inputs}
                                type="text"
                                placeholder="Email.."
                                ref={signinEmailRef}
                            />
                        </div>
                        <div>
                            <input
                                className={styles.inputs}
                                type="password"
                                placeholder="Password.."
                                ref={signinPassRef}
                            />
                        </div>
                        <p
                            className={styles.incorrectMessage}
                            style={{
                                visibility: incorrectAttempt
                                    ? 'visible'
                                    : 'hidden',
                            }}
                        >
                            Incorrect Credentials
                        </p>
                        <button
                            onClick={handleSignInSubmit}
                            className={`${styles.buttons} ${styles.submitBtn}`}
                        >
                            Sign In
                        </button>
                    </form>
                </div>

                <div className={styles.overlayContainer}>
                    <div className={styles.overlay}>
                        <div
                            className={`${styles.overlayPanel} ${styles.overlayLeft}`}
                        >
                            <div className={styles.overlayLeft}>
                                <h1 className={styles.h1s}>Welcome Back!</h1>
                                <p className={styles.pTags}>
                                    To continue your job hunt with us
                                    <br />
                                    <br />⬇
                                </p>

                                <button
                                    className={`${styles.ghost} ${styles.buttons}`}
                                    onClick={toggleContainer}
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>
                        <div
                            className={`${styles.overlayPanel} ${styles.overlayRight}`}
                        >
                            <div className={styles.overlayRight}>
                                <h1 className={styles.h1s}>
                                    Welcome New Cazador!
                                </h1>
                                <p className={styles.pTags}>
                                    Enter your personal details and start your
                                    job hunt
                                </p>
                                <button
                                    className={`${styles.ghost} ${styles.buttons}`}
                                    // id="signUp"
                                    onClick={toggleContainer}
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
