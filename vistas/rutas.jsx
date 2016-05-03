import ReactRouter,{Router,Route,IndexRoute,Redirect,browserHistory} from 'react-router'
import React from 'react'
import Layout from './layout'
import LoginForm from './usuario/loginForm'
import RegistroForm from './usuario/registroForm'
import ListaUsuarios from './usuario/ListaUsuarios'
import AgregarForm from './usuario/agregarForm'
import ModificarForm from './usuario/modificarForm'

var routes = module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <Route path='/ingresar' component={LoginForm} />
      <Route path='/registrar' component={RegistroForm} />
      <Route path='/listar-usuarios' component={ListaUsuarios} />
      <Route path='/agregar' component={AgregarForm} />
      <Route path='/usuarios/modificar/:id' component={ModificarForm} />
    </Route>
  </Router>
)
