var React = require('react')

function Main (props) {
  return (
    <div>
      <h1>Hello World</h1>
      {props.children}
    </div>
  )
}

module.exports = Main
