import React from "react";
import { motion } from 'framer-motion';
import styles from '../styles/Modal.module.css';

const Modal = ({selectedImage, setSelectedImage}) => {

    const clickBackdrop = (e) => {
        if (e.target.classList.contains(styles.Backdrop))
            setSelectedImage(null);
    }

    return (
        <motion.div className={styles.Backdrop} onClick={clickBackdrop}
            initial={{opacity:0}}
            animate={{opacity:1}}
        >
            <img src={selectedImage} alt="modal img"></img>
        </motion.div>
    )
}

export default Modal;