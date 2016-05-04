import React from 'react'
import Header from './header'
import Footer from './footer'
if(process.env.BROWSER){
  require('./styles/custom.css')
}


class Layout extends React.Component {

  render(){
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <link rel="stylesheet" href="/styles/main.css" />
          <title>{this.props.title}</title>
      </head>
        <body>
          <div>
            <Header/>
            {this.props.children}
            
          </div>
          <script src='/bundle.js'></script>
        </body>
      </html>
    )
  }
}

module.exports = Layout
