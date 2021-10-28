import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useHistory } from 'react-router-dom';
import { auth, register } from '../firebase/config';
import styles from '../styles/Register.module.css';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [user, error, loading] = useAuthState(auth);
    const history = useHistory();

    const reg = () => {
        if (!username)
            alert("Please enter a username!");
        
        register(username, email, password);
    }

    useEffect(() => {
        if (loading){
            //trigger something here, maybe a loading screen
            return;
        }
        if (user)
            history.replace("/home");
    }, [user, loading]);

    return (
        <div className={styles.Register}>
            <div className={styles.RegisterWrapper}>
                <input type="text" className={styles.RegisterTxt} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="text" className={styles.RegisterTxt} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" className={styles.RegisterTxt} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button className={styles.RegisterBtn} onClick={reg}>Register</button>
                <div>
                    Already have an account? <Link to="/">Login now.</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;