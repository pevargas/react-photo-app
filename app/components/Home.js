var React = require('react')
var PropTypes = React.PropTypes
var Loading = require('./Loading')
var Photo = require('./Photo')

function Home (props) {
  if (props.isLoading === true) {
    return (<Loading />)
  }

  return (
    <div>
      {props.photos.map(function (photo) {
        return <Photo key={photo.id} data={photo} />
      })}
    </div>
  )
}

Home.propTypes = {
  photos: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
}

module.exports = Home
