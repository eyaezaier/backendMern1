// require express
const express = require('express')

// get instance
const app = express()

// midlleware body parser
app.use(express.json())

// require dotenv
require('dotenv').config()

// connection to DB
const connect = require('./config/connectDB')
connect()

// create PORT
const PORT = process.env.PORT || 5000

// listen to the port
app.listen(PORT, (err)=> {
    err? console.log(err)
    : console.log(`The server is running on PORT: ${PORT}`)
})

// require routes
app.use('/api/products', require('./routes/productRoute'))

app.use('/api/user', require('./routes/userRoute'))



app.use((req,res)=>{
    res.send("API is running ...")
})