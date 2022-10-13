const express = require('express');
const app = express();
const sql = require('./dbconfig')
const cors = require('cors');

app.use(cors()); //CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
// app.get('/api',(req,res)=>{
//     console.log('called')
//     res.send({result: 'hellooooo'})
// })
// app.get('/quit',(req,res)=>{
//     console.log('called quit')
//     res.send({result: 'good bye'})
// })

app.get('/api',(req,res)=>{
    sql.get_Data().then((result)=>{
        res.json(result[0])
    })
    
})

app.listen(5000,()=>{
    console.log('listening to port 5000')
})