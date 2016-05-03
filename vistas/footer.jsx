import React,{Component} from 'react'

class Footer extends Component {

  render(){
    return(
      <footer className="site-footer">
        <div className="container">
          <div className="colophon">
            <div className="column">
              <ul className="list-inline text-right">
                <li><span>© 2016 Paola Roman. All Rights Reserved.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

module.exports = Footer
