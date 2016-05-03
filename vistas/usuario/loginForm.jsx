import React from 'react'

class LoginForm extends React.Component {
  render(){
    return (
      <div className="form">
        <form action="/usuarios/ingresar" method="post">
          <input className="form-input" type="text" name="email" value="" placeholder="Ingresa tu nombre de usuario" required />
          <input className="form-input" type="password" name="password" placeholder="Ingresa tu password" required/>
          <input className="form-input btn btn-default" type="submit"  value="Ingresar" />
        </form>
      </div>
    )
  }
}

module.exports = LoginForm
