import {useState, useEffect} from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection, user) => {
    const [docs, setDocs] = useState([]);
//

    useEffect(() => {
        if (user){
            const unsubscribe = projectFirestore.collection(collection)
            .where("userId", "==", user.uid)
            .orderBy('dateTimeCreated', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    // console.log(doc.data().userId);
                    documents.push({...doc.data(), id: doc.id})
                });
                setDocs(documents);
            });
    
            return () => unsubscribe();
        }
    }, [collection, user])

    return {docs};
}

export default useFirestore;