require('babel-register')({
  presets: ['react',"es2015"],
  plugins:['transform-class-properties']
})

var path = require('path')
var express = require('express')
var renderer = require('react-engine')
var http = require("http")
var log = require("morgan")
var bodyParser = require("body-parser")
var controladorUsuario = require("./controladores/controladorUsuario")
var mongoose = require("mongoose")

const app = express()

// configuraciones del servidor
const reactRoutesFilePath = path.join(__dirname + '/vistas/rutas.jsx')
var engine = renderer.server.create({
  routes: require(reactRoutesFilePath),
  routesFilePath: reactRoutesFilePath
})
app.engine('.jsx', engine)
app.set('views', path.join(__dirname, '/vistas'))
app.set('view engine', 'jsx')
app.set('view', renderer.expressView)
app.set("port",3000)
app.use(express.static(path.join(__dirname, '/vistas')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(log("dev"))

// conexion a la base de datos
mongoose.connect('mongodb://localhost/administrador', (err) =>{
	if(!err){
		console.log("connectado a MongoDB")
	}else{
		throw err
	}
})

// Asignando urls a los controladores
app.use("/usuarios",controladorUsuario)

const servidor = http.createServer(app)

servidor.listen(app.get("port"), () => {
  console.log('Servidor corriendo en puerto',app.get("port"))
})
