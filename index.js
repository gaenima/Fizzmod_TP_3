
//app.use(express.static('/package.json'))

import express from 'express'
import routes from './routes/index.js'

//Instanciar express
const app = express()
app.use(express.urlencoded({extended: true}))
//Usar rutas
app.use('/', routes)

//Escuchar puerto
const PORT = process.env.POORT || 8008
const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
//Controlar error en servidor
server.on('Error!', err => console.log(`Error on Server: ${err}`))