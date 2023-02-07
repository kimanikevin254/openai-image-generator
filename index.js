
const express = require('express')
require('dotenv').config()

const app = express()

const port = 5000

// enable body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// use router
app.use('/openapi', require('./routes/openaiRoutes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})