import React from 'react'
import {Link} from 'react-router'

class ListaUsuarios extends React.Component {
  render(){
    return (
      <div>
        <Link className="btn btn-default" to="/usuarios/agregar">Agregar usuario</Link>
        <Link className="btn btn-default" to="/usuarios/agregar">Crear Grupo</Link>
        <table className="table table-fixed">
          <thead>
            <tr>
              <th width="5%" data-column="picture"></th>
              <th width="20%" data-column="name">Nombre</th>
              <th width="20%" data-column="email">usuario</th>
              <th width="20%" data-column="lastLogin">correo</th>
              <th width="15%" data-column="loginsCount"># Grupo</th>
              <th width="20%" data-column="connections"></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.usuarios.map( (usuario,index) => {
                return (
                  <tr key={index}>
                    <td>
                      <Link to={`/usuarios/modificar/${usuario._id}`}>
                        <img src='/imagen/icon_user.png' width="32" className="img-circle" />
                      </Link>
                    </td>
                    <td title="" className="text-truncate">{usuario.nombre} {usuario.apellido}</td>
                    <td title="jon@auth0.com" className="text-truncate">{usuario.usuario}</td>
                    <td>{usuario.email}</td>
                    <td></td>
                    <td className="text-truncate"><Link to={`/usuarios/modificar/${usuario._id}`} className="btn btn-success">Modificar</Link></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )

  }
}

module.exports = ListaUsuarios
