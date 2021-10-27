import React from "react";
import { motion } from 'framer-motion';

const Modal = ({selectedImage, setSelectedImage}) => {

    const clickBackdrop = (e) => {
        if (e.target.classList.contains('backdrop'))
            setSelectedImage(null);
    }

    return (
        <motion.div className="backdrop" onClick={clickBackdrop}
            initial={{opacity:0}}
            animate={{opacity:1}}
        >
            <img src={selectedImage} alt="modal img"></img>
        </motion.div>
    )
}

export default Modal;