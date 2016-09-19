var React = require('react')
var Loading = require('./Loading')

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function Home (props) {
  if (props.isLoading === true) {
    return (<Loading />)
  }

  return (
    <div>
      <p>This is home</p>
      {puke(props)}
    </div>
  )
}

module.exports = Home
