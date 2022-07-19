// importamos express
import express from 'express'
//  const name = require('module') NO  FUNCIONA CON "type": "module",

// guarda funciones o metodos para trabajar con req, res, middlewares, handles, routers
const app = express()

// localhost:3001/

//  define el verbo HTTP con 2 params; la ruta '/' y el handler 
app.get('/', (req, res) => { 
    res.send('primer backend con express 🔥')
})

// Se define el puerto y callback de finalizacion
app.listen(3001, function () {
    console.log('Application running')
})


