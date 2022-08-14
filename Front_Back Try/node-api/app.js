const express = require('express');
const app = express();

app.get('/getData' , (req,res)=>{
    res.json({
        "statusCode":200,
        "statusMessage":"SUCCESS"
    })
})

app.listen(3000,(req,res)=>{
    console.log('Express App is running on port 3000');
})