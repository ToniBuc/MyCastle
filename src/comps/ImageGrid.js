import React from "react";
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { auth } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from '../styles/ImageGrid.module.css';

const ImageGrid = ({setSelectedImage}) => {
    const [user, loading, error] = useAuthState(auth);
    const {docs} = useFirestore('images', user);

    return (
        <div className={styles.ImageGrid}>
            {docs && docs.map(doc => (
                <motion.div className={styles.ImageWrapper} key={doc.id} 
                layout
                whileHover={{opacity:1}} 
                onClick={() => setSelectedImage(doc.url)}>
                    <motion.img src={doc.url} 
                    alt="img placeholder" 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1}}></motion.img>
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;