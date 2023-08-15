const express = require('express');
const cors = require('cors');

const app = express(); 
app.use(cors({
    origin: '*'
}));
app.get('/names',(req, res)=>{
    res.send("sampaio");
})
app.listen(5000,()=>{
    console.log("listening on port 5000")
})