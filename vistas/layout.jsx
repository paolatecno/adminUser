import React from 'react'

class Layout extends React.Component {
  render(){
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Layout
