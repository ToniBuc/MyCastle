import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from 'framer-motion';
import { auth } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from '../styles/ProgressBar.module.css';

const ProgressBar = ({file, setFile}) => {
    const [user, loading, error] = useAuthState(auth);

    const {progress, url} = useStorage(file, user);
    
    useEffect(() => {
        if (url){
            setFile(null);
        }
    }, [url, setFile])
    return (
        <motion.div className={styles.ProgressBar} 
        initial={{width: 0}}
        animate={{width: progress + '%'}}
        ></motion.div>
    )
}

export default ProgressBar;