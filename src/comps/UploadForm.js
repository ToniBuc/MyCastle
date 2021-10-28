import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import styles from '../styles/UploadForm.module.css';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const fileTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    const fileChange = (e) => {
        let selectedFile = e.target.files[0];
        
        if (selectedFile && fileTypes.includes(selectedFile.type)){
            setFile(selectedFile);
            setError('');
        }
        else {
            setFile(null);
            setError('The selected file must be an image (png, jpeg or jpg).');
        }
    }

    return(
        <form className={styles.Form}>
            <label className={styles.FormBtn}>
                <input type="file" onChange={fileChange}></input>
                <span>+</span>
            </label>
            <div className={styles.ResponseDiv}>
                {error && <div className={styles.ErrorText}>{error}</div>}
                {file && <div className={styles.FileText}>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm;