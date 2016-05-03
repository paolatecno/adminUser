import React from 'react'

class ModificarForm extends React.Component {
  render(){
    return (
      <div className="form">
        <form action={`/usuarios/modificar/${this.props.id}`} method="post">
          <input className="form-input" type="text" name="usuario" value={this.props.usuario} placeholder="nombre de usuario" required />
          <input className="form-input" type="email" name="email" value={this.props.email} placeholder="correo" required />
          <input className="form-input" type="text" name="nombre" value={this.props.nombre} placeholder="nombre"  />
          <input className="form-input" type="text" name="apellido" value={this.props.apellido} placeholder="apellido"  />
          <input className="form-input btn btn-default" type="submit"  value="Crear usuario" />
        </form>
      </div>
    )
  }
}

module.exports = ModificarForm
