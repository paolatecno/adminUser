import React from 'react'

class AgregarForm extends React.Component {
  render(){
    return (
      <div className="form">
        <form action="/usuarios/agregar" method="post">
          <input className="form-input" type="text" name="usuario" value="" placeholder="nombre de usuario" required />
          <input className="form-input" type="email" name="email" value="" placeholder="correo" required />
          <input className="form-input" type="text" name="nombre" value="" placeholder="nombre"  />
          <input className="form-input" type="text" name="apellido" value="" placeholder="apellido"  />
          <input className="form-input btn btn-default" type="submit"  value="Crear usuario" />
        </form>
      </div>
    )
  }
}

module.exports = AgregarForm
