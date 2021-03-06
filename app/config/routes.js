var React = require('react')
var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var IndexRoute = ReactRouter.IndexRoute
var hashHistory = ReactRouter.hashHistory
var MainContainer = require('../components/Main')
var HomeContainer = require('../containers/HomeContainer')

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={HomeContainer}/>
    </Route>
  </Router>
)

module.exports = routes
