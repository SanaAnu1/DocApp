import React from 'react'
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import {  deleteDoc, doc } from 'firebase/firestore';
import { database } from '../firebaseConfig';


function Docs({docsData}) {

    let navigate = useNavigate();
   

    const getID = (id) => {
        navigate(`/editDocs/${id}`)
    }

    //to delete
    function deleteDocm(id){
        const docRef= doc(database,'docsData',id)
        deleteDoc(docRef)
              .then(() => {
                  console.log('Document successfully deleted!');
                })
                .catch((error) => {
                  console.error('Error removing document: ', error);
                });
          }
    
  return (
    <div className='grid-main w-100 container ms-auto'>
                {docsData.map((doc) => {
                    return (
                        <div className='grid-child'>
                           <Box borderBottom={1} >
                               <Box display="flex" justifyContent="flex-end" > 
                               
                               <Box display="flex" padding={1}><span onClick={() => getID(doc.id)}><EditIcon></EditIcon></span></Box>
                                <Box display="flex" padding={1}><span onClick={()=>deleteDocm(doc.id)}><DeleteIcon></DeleteIcon></span></Box></Box>
                           </Box>
                            <h3 className='y' >{doc.title}  </h3>
                            <div dangerouslySetInnerHTML={{ __html: doc.docsDesc }}  className='y' />
                        </div>
                    )
                })}
            </div>
  )
}

export default Docs