import { async } from '@firebase/util';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {serverTimestamp, collection, addDoc , doc } from 'firebase/firestore'
import { projectStorage, projectFirestore} from '../firebase/config';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error,setError] = useState(null);
    const [url,setUrl] = useState(null);


    useEffect( ()=>{
        //references
        const storageRef = ref(projectStorage, file.name);
        const collectionRef = collection(projectFirestore, 'images');
        uploadBytes(storageRef, file).then(async (snap)=>{
            const url = await getDownloadURL(storageRef);
            const createdAt = serverTimestamp();
            addDoc (collection(projectFirestore, 'images'), {url:url, createdAt});
            setUrl(url);
        });
    },[file])

    return {progress,url,error};
}

export default useStorage;