import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

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
        <form>
            <label>
                <input type="file" onChange={fileChange}></input>
                <span>+</span>
            </label>
            <div className="responseDiv">
                {error && <div className="errorText">{error}</div>}
                {file && <div className="fileText">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm;