import React,{useState} from 'react'
import Chart from './Chart';
import {Input,Grid,Button} from '@mui/material';
import Navbar from './Navbar';
import { getCompany } from '../api/service';
import { CircularProgress,Box } from '@mui/material'
const axios = require('axios');

function SearchBar() {

 const [company,setCompany] =useState('demo');
 const [isLoading,setIsLoading] =useState(true);
 const [datasets,setDatasets] =useState(null);

const handleChange=(e)=>{
    // setIsLoading(false);
    setCompany(e.target.value);

}


const handleClick=(e)=>{
  // setCompany(e.target.value);
  var data = getCompany(company);
  setIsLoading(true);
  if(data.error==null){
    setIsLoading(false);
    setDatasets(data);
  }else{
  console.log(data.error);
  alert("error");
}
  // isLoading(false);
}
// async function getCompany(cmpyName) {
//     try {
//       const response = await axios.get('/user?ID=12345'+cmpyName);
//       console.log(response);
//       var data=response.data;
//       setDatasets(data);
//       isLoading(false);
//     } catch (error) {
//       console.error(error);
//     }
//   }


  return (
    <div>
        <Navbar/>
        <Grid container="upload-File-Grid" 
         spacing={2}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '25vh' }}>

        <Input variant="search" style={{width:"50%"}} placeholder='Enter Company Name' onChange={handleChange} >
          </Input> 
          <Button   style={{ margin: '10px' }} variant='contained' onClick={handleClick} >Search</Button>
          </Grid>
        {isLoading ? 
        <>    
         {/* <Box   direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '25vh' }}>
            <CircularProgress />
          </Box> */}
        </> : 
        <>   
        {datasets!=null && !isLoading ?  <Chart datasets={datasets}/> : setIsLoading(true) }  
        </>}
     </div>
  )
}

export default SearchBar