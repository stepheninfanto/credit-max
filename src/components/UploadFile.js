import React,{useState} from 'react';
import {Input,Button,Grid} from '@mui/material'
import "./UploadFile";

function UploadFile() {

    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

const changeHandler = (e) => {
		setSelectedFile(e.target.files[0]);
		setIsFilePicked(true);
        console.log("file loaded ");
	};


const handleSubmission=()=>{
    const formData = new FormData();
		formData.append('File', selectedFile);
        console.log(selectedFile);
		fetch('http://127:4000/creditData',
			{method: 'POST',
			body: formData,
			}
		).then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
            alert("the file is submitted");//to change acord to data             
            // setSelectedFile();
	};

  return (
    <div >
        <Grid container="upload-File-Grid" 
         spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>


       
        {isFilePicked ? (
        <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>        
        </div>
        ) : (
        <p>SELECT A FILE </p>
        )}

      <label htmlFor="contained-button-file">
        <Input accept="*" style={{color: "red",display:"none"}} id="contained-button-file"  onChange={changeHandler}  type="file" />
        <Button  variant="contained" component="span" >
          Upload
        </Button>
      </label>
         <div style={{margin: "36px"}}> 
            <Button variant="contained" onClick={handleSubmission} >Submit</Button>
        </div>
        </Grid>
    </div>
  )
}

export default UploadFile