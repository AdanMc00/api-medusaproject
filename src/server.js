
const express = require('express')
const cors = require('cors')

const productsRouter = require('./routes/products')
const usersRouter = require('./routes/users')
const app = express()
app.use(cors())
app.use(express.json())
app.use('/products', productsRouter)
app.use('/users', usersRouter)
module.exports = app