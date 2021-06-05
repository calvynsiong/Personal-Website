const express = require('express')
require('dotenv').config()

const path = require('path')
const app = express()

const PORT = process.env.PORT || 5000



app.use(express.static(path.join(__dirname, '../', 'frontend', 'build')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../', 'frontend', 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
