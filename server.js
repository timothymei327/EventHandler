const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const routes = require('./routes')
const PORT = process.env.PORT || 3002
const db = require('./db')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.static(`${__dirname}/client/build`))

app.use('/api', routes)

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
