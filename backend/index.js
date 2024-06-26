const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')



connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())


// Availble routes

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

//app.get('/', (req, res) => {
//  res.send('Hello Harry!')
//})
//
//app.get('/api/v1/login', (req, res) => {
//  res.send('Login!')
//})
//
//app.get('/api/v1/signup', (req, res) => {
//  res.send('signup!')
//})

app.listen(port, () => {
  console.log(`iNotebook app listening at http://localhost:${port}`)
})