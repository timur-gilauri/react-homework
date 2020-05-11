const express = require('express')
const { resolve } = require('path')

const app = express()

app.use('/static', express.static('./public'))

app.get('/', function (req, res) {
  res.sendFile(resolve('./public/index.html'))
})

app.listen(8080, () => console.log('listen on 8080'))