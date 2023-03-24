const axios = require('axios');


axios.get('https://www.google.com')
.then(function (response) {
    console.log(response);
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log('DONE!')
})

