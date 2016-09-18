var React = require('react')
var Navbar = require('./Navbar')

function Main (props) {
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
      {props.children}
    </div>
  )
}

module.exports = Main
