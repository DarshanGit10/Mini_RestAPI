const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 3000


// Connect the DB
conStr = ''
mongoose.connect(conStr, {useNewUrlParser:true})

const con = mongoose.connection
con.on('open', ()=>{
    console.log('Connected to DB')
})

// app.get('/', (req, res)=>{
//     res.send('Hello World')
// })

app.use(express.json())
const stdRouter = require('./routes/student') 
app.use('/student', stdRouter)
  
app.listen(port, () =>{
    console.log(`Server started http://localhost:${port}`)
})