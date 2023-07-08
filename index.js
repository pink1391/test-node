const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000

app.get('/', (req,res)=>{
    res.send("Hello World");
})

app.get('/student',(req,res)=>{
    res.send("This is student khittu pagla12");
})

app.get('/test',(req,res)=>{
    res.send("This is test");
})

app.get('/employee',(req,res)=>{
    res.send("This is employee.");
})

app.listen(PORT,()=>{
    console.log(`Listen to port number ${PORT}`)
})
