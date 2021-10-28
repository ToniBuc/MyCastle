import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth, login } from "../firebase/config";
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from '../styles/Login.module.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    useEffect(() => {
        if (loading){
            //trigger something here, maybe a loading screen
            return;
        }
        if (user)
            history.replace("/home");
    }, [user, loading]);

    return (
        <div className={styles.Login}>
            <div className={styles.LoginWrapper}>
                <input type="text" className={styles.LoginTxt} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" className={styles.LoginTxt} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button className={styles.LoginBtn} onClick={() => login(email, password)}>Login</button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/register">Register now.</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;