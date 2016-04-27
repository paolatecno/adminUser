import React from 'react'
import Layout from './layout'

class App extends React.Component {
  render(){
    return(
      <Layout {...this.props}>
        <main role="application" className="App">
          {this.props.children}
        </main>
      </Layout>
    )
  }
}

module.exports = App
