import React from "react";
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({setSelectedImage}) => {
    const {docs} = useFirestore('images');

    return (
        <div className="imageGrid">
            {docs && docs.map(doc => (
                <motion.div className="imageWrap" key={doc.id} 
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