import express from "express"

let controladorUsuario = express.Router()

controladorUsuario.get("/" ,(req,res) => {
  // res.render("home")
  res.render(req.url, {
    title: 'Titulo'
  })
})

controladorUsuario.post("/" ,(req,res) => {
  res.send({})
})

export default controladorUsuario
