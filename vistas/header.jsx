import React,{Component} from 'react'
import {Link} from 'react-router'

class Header extends Component {
  render(){
    return (
      <header className="site-header">
        <nav role="navigation" className="navbar navbar-default">
            <div id="navbar-collapse" className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li class="li-docs no-basic"><Link to="/usuarios/ingresar">Ingresar</Link></li>
                <li class="li-docs no-basic"><Link to="/usuarios/registrar">Registrar Usuario</Link></li>
                <li><Link to="/usuarios/listar-usuarios" className="signin-button login">Panel Administrador</Link></li>
              </ul>
            </div>
        </nav>
      </header>
    )
  }
}

module.exports = Header
