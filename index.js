const express = require('express');
const app = express();

app.use('/', (req, res)=>{
    res.send('<h1> Le Resposne</h1>')
})
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server is listeing on ${PORT}`)
})