// http://127.0.0.1.5000/credit_rate_engine
const axios = require('axios');



// first call to db 
  
export async function getCreditData(formData) {
  try {
    const response = await axios.post('http://127.0.0.1.5000/credit_rate_engine',formData);
    console.log(response);
    return  data=response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}


export async function getCompany(cmpyName) {
  try {
    const response = await axios.get('/user?ID=12345'+cmpyName);
    console.log(response);
    return  data=response.data;
    // setDatasets(data);
    // isLoading(false);
  } catch (error) {
    console.error(error);
    return error;
  }
}

// axios.post('/user', {
//   firstName: 'Fred',
//   lastName: 'Flintstone'
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });


// fetch('http://127:4000/creditData',
// {method: 'POST',
// body: formData,
// }
// ).then((response) => response.json())
// .then((result) => {
//   console.log('Success:', result);
//   alert("the file is submitted");
// })
// .catch((error) => {
//   console.error('Error:', error);
//   alert("the file is Error");
// });
