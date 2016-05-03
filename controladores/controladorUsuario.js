var express = require("express")
var Usuario = require("../modelos/usuario")

var controladorUsuario = express.Router()

controladorUsuario.get("/listar-usuarios" ,(req,res) => {
  Usuario.obtenerUsuarios()
    .then(  usuarios => {
      res.render(req.url, {
        title: "Lista de usuario",
        usuarios : usuarios
      })
    })
})

controladorUsuario.get("/ingresar" ,(req,res) => {
  res.render(req.url, {
    title: "Ingresar al panel"
  })
})

controladorUsuario.post("/ingresar" ,(req,res) => {
  console.log(req.body)
  res.redirect("/usuarios/listar-usuarios")
})

controladorUsuario.get("/registrar" ,(req,res) => {
  res.render(req.url, {
    title: "Registrarse"
  })
})

controladorUsuario.get("/agregar" ,(req,res) => {
  res.render(req.url, {
    title: "Registrar usuario"
  })
})

controladorUsuario.post("/agregar" ,(req,res) => {

  const usuario = req.body.usuario
  const password = ""
  const nombre = req.body.nombre
  const apellido = req.body.apellido
  const email = req.body.email

  Usuario.crear(nombre,apellido,usuario,password,email)
    .then( nuevoUsuario => {
      res.redirect("/usuarios/listar-usuarios")
    })
    .catch( error => {
      res.send({"error":error})
    })

})

controladorUsuario.post("/registrar" ,(req,res) => {

  const usuario = req.body.usuario
  const password = req.body.password
  const nombre = ""
  const apellido = ""
  const email = ""

  Usuario.crear(nombre,apellido,usuario,password,email)
    .then( nuevoUsuario => {
      res.redirect("/usuarios/listar-usuarios")
    })
    .catch( error => {
      res.send({"error":error})
    })

})

controladorUsuario.get("/modificar/:id", (req,res) =>{
  const usuarioId = req.params.id
  Usuario.obtenerUsuario(usuarioId)
    .then( usuario => {
      res.send(usuario)
    })
})


module.exports = controladorUsuario
