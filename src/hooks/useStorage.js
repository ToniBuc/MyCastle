import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storage = projectStorage.ref(file.name);
        const collection = projectFirestore.collection('images');

        storage.put(file).on('state_changed', (snap) => {
            let progressPercentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(progressPercentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storage.getDownloadURL();
            const dateTimeCreated = timestamp();
            collection.add({ url, dateTimeCreated})
            setUrl(url);
        });
    }, [file]);

    return { progress, error, url }
}

export default useStorage;