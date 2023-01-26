import { useState } from "react";
import { auth, storage } from '../lib/firebase';

import { Loader } from "./Loader";
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage'

import React from 'react'
import { async } from "@firebase/util";

export default function ImageUploader() {
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [downloadURL, setDownloadURL] = useState(null);

    const uploadFile = async (e) => {



        const file = Array.from(e.target.files)[0];
        const extension = file.type.split('/')[1];

        const storageRef = ref(storage, `uploads/${auth.currentUser.uid}/${Date.now()}.${extension}`);
        setUploading(true);

        // Starts the upload
        const task = uploadBytesResumable(storageRef, file);

        // Listen to updates to upload task2
        task.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                const pct = progress.toFixed(0);
                setProgress(pct);

            },
            (error) => {
                console.log("uploaing image error");
            },
            () => {
                // handle successfull uploads on complete
                getDownloadURL(task.snapshot.ref).then((downloadURL) => {
                    setDownloadURL(downloadURL);
                    setUploading(false);
                }
                )
            }

        )



    }


    return <div className=" flex space-between">
        {/* <Loader show={uploading} /> */}
        {uploading && <h3>{progress}%</h3>}
        {!uploading &&
            (
                <label class="mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input" >
                    <button type="button" onClick={() => { document.getElementById("get_image").click() }} >upload image </button>
                    {/* <button className=" block  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"> upload image </button> */}
                    <input type="file" id="get_image" className="hidden" onChange={uploadFile} accept="image/x-png,image/gif,image/jpeg" />
                </label>

            )
        }

        {downloadURL && <code className="">{`![alt](${downloadURL})`}</code>}

    </div>

        ;
}
