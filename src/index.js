const express = require('express');

//Initializations
const app = express();

//Start server
app.listen(3000, () => {
    console.log('Server on port: ', 3000);
});