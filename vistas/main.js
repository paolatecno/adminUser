var Routes = require('./rutas.jsx')

var ReactEngineClient = require('react-engine/lib/client')

var options = {
  routes: Routes,


  viewResolver: function(viewName) {
    return require('./' + viewName)
  }
}

document.addEventListener('DOMContentLoaded', function onLoad() {
  ReactEngineClient.boot(options)
})
