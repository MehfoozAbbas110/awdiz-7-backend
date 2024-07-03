const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome Mehfooz Abbas Hasni.....!!!!!!')
})

app.listen(3000)