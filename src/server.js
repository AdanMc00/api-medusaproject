
const express = require('express')
const cors = require('cors')

const productsRouter = require('./routes/products')
const usersRouter = require('./routes/users')
const salesRouter =  require('./routes/sales')
const app = express()
app.use(cors())
app.use(express.json())
app.use('/products', productsRouter)
app.use("/sales", salesRouter)
app.use('/users', usersRouter)
module.exports = app