const connectToMongo = require('./db')
const express = require('express')



connectToMongo();
const app = express()
const port = 5000

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
  console.log(`Example app listening on http://localhost:${port}`)
})