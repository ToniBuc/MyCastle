import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useHistory } from 'react-router-dom';
import { auth, resetPassword } from '../firebase/config';
import styles from '../styles/Reset.module.css';

function Reset() {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    useEffect(() => {
        if (loading){
            //trigger something
            return;
        }
        if (user)
            history.replace("/home");
    }, [user, loading]);

    return (
        <div className={styles.Reset}>
            <div className={styles.ResetWrapper}>
                <input type="text" className={styles.ResetTxt} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                <button className={styles.ResetBtn} onClick={() => resetPassword(email)}>Send Reset Link</button>
                <div>
                    <Link to="/">Back to Login.</Link>
                </div>
            </div>
        </div>
        
    );
}

export default Reset;