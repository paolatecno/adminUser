import React from 'react'

class RegistroForm extends React.Component {
  render(){
    return (
      <div className="form">
        <form action="/usuarios/registrar" method="post">
          <input className="form-input" type="text" name="usuario" value="" placeholder="nombre de usuario" required />
          <input className="form-input" type="password"  name="password" placeholder="password" required/>
          <input className="form-input btn btn-default" type="submit"  value="Crear usuario" />
        </form>
      </div>
    )
  }
}

module.exports = RegistroForm
