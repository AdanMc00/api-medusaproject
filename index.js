
require('dotenv').config()

const db = require('./src/lib/db')
const server = require('./src/server')

db
  .then(() => {
    server.listen(8080, () => {
      console.log('server running')
    })

    console.log('Estamos Conectados Perroooos ')
  })
  .catch((error => {
      console.log('Algo salio mal', error)
    })

  )