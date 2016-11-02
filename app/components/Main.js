var React = require('react')
var Navbar = require('./Navbar')
var PropTypes = React.PropTypes

function Main (props) {
  return (
    <div>
      <Navbar likeCount={props.likeCount}/>
      <h1>Hello World</h1>
      {props.children}
    </div>
  )
}

Main.PropTypes = {
  likeCount: PropTypes.number.isRequired
}

module.exports = Main
