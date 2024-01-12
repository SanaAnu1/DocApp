import { Box, Button} from '@mui/material'
import React, { useEffect, useRef } from 'react'
import  { useState } from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Docs from '../components/Docs';
import { addDoc, collection, doc, onSnapshot } from 'firebase/firestore';


function Home({database}) {
        const style = {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
    
}

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
     //to add title
     const [title, setTitle] = useState('')
     const collectionRef = collection(database, 'docsData')
     const addData = () => {
      if(title!=''){
      addDoc(collectionRef, {
        title: title,
        docsDesc:''
    })
    .then(() => {
        alert('Document Added')
        handleClose()
    })
    .catch(() => {
        alert('Cannot add data')
    })
  }else{
    alert("Please add title")
  }
     }
     
     //get data

     const getData = () => {
      onSnapshot(collectionRef, (data) => {
        setDocsData(data.docs.map((doc) => {
              return {...doc.data(), id: doc.id}
          }))
      })
  }
  const isMounted = useRef()
  useEffect(() => {
    if(isMounted.current){
      return 
  }

  isMounted.current = true;
  getData()
}, [])

//add this data to an array
const [docsData, setDocsData] = useState([]);


    
  return (
   <>
        <div >
            <Box display="flex" justifyContent="center" alignItems="center" sx={{ pt: 5 }}>
    <Button onClick={handleOpen} sx={{ px: 3, py: 2 }}  variant="contained" color="secondary"> + Add Document</Button>
    </Box>
    <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            title={title}
            setTitle={setTitle}
          >
            <Box sx={style}>
              <Box   display="flex" justifyContent="center" alignItems="center">
                  <Typography  id="modal-modal-title" variant="h6" component="h2">
                   
                  <TextField
                  sx={{ width: 300}}
                  id="outlined-textarea"
                  label="Add Title"
                  placeholder="Add Title"
                  multiline
                  onChange={(event) => setTitle(event.target.value)}
                        value={title}
                />
                  </Typography>
              </Box>
              <Box  display="flex" justifyContent="center" alignItems="center">
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                   <Button variant="contained" color="success"  onClick={addData} >Add</Button>
                  </Typography>
              </Box>
            </Box>
          </Modal>
        </div>
        <div>
            <Docs docsData={docsData} doc={doc}></Docs>
        </div>
   </>
  )
}


export default Home