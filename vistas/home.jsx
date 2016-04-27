import React from 'react'
import Layout from './layout'
import {Link} from 'react-router'

class Home extends React.Component {

  render(){
    return (
      <header>
        <h1>{this.props.title}</h1>
        <Link to="usuarios">Usuarios</Link>
      </header>
    )
  }
}

module.exports = Home
