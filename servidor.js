import http from  'http'
import path from 'path'
import express from 'express'
import engine from 'react-engine'

import controladorUsuario from './controladores/controladorUsuario'

const app = express()

// Configuracion general del servidor
app.set("puerto", 3000)
// app.engine('.jsx',engine.server.create())
app.engine('.jsx', engine.server.create({
  reactRoutes: path.join(__dirname, 'routes.jsx')
}))
app.set("views",path.join(__dirname,"vistas"))
app.set("view engine","jsx")
app.set("view",engine.expressView)

// Incluyendo los controladores
app.use("/usuarios",controladorUsuario)

const servidor = http.createServer(app)

servidor.listen(app.get("puerto"),function(){
  console.log(`Servidor corriendo en puerto ${this.address().port}`)
})
