import React from 'react'
import ReactRouter,{Router,Route,IndexRoute,browserHistory} from 'react-router'
import App from './vistas/app'
import Home from './vistas/home'

const routes = (
  <Router history={browserHistory}>
    <Route path="/usuarios" component={App}>
      <IndexRoute path="/" component={Home} />
    </Route>
  </Router>
)

export dedault routes
