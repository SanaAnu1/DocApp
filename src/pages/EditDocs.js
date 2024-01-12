import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {updateDoc, collection,doc,onSnapshot} from 'firebase/firestore';
import { Box, Button } from '@mui/material';

function EditDocs({database}) {
    const isMounted = useRef()
    const collectionRef = collection(database, 'docsData')
    let params = useParams();
    const [documentTitle, setDocumentTitle] = useState('')
    const [docsDesc, setDocsDesc] = useState('');
    const getQuillData = (value) => {
        setDocsDesc(value)
    }
    useEffect(() => {
        const updateDocsData = setTimeout(() => {
            const document = doc(collectionRef, params.id)
            updateDoc(document, {
                docsDesc: docsDesc
            })
                
               
        }, 50)
        return () => clearTimeout(updateDocsData)
    }, [docsDesc])

    const getData = () => {
        const document = doc(collectionRef, params.id)
        onSnapshot(document, (docs) => {
            setDocumentTitle(docs.data().title)
            setDocsDesc(docs.data().docsDesc);
        })
    }

    useEffect(() => {
        if (isMounted.current) {
            return
        }

        isMounted.current = true;
        getData()
    }, [])

    const navigate = useNavigate();
    function handleClick() {
      // show the alert message
      alert("Your document is updated");
      // redirect to the home page
      navigate("/");
    }
    return (
        <div className='editDocs-main'>
            <ToastContainer />
            <h1 className='ti'>{documentTitle}</h1>
            <div className='editDocs-inner r' >
                <ReactQuill
                    className='react-quill'
                    value={docsDesc}
                    onChange={getQuillData}
                />
            </div>
            <Box display="flex" justifyContent="center" padding={2}><Button onClick={handleClick} variant="contained" color="success">
  Save
</Button></Box>
        </div>
    )
}
export default EditDocs


