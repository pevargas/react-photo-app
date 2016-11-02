var React = require('react')
var PropTypes = React.PropTypes
var Loading = require('./Loading')
var Photo = require('./Photo')

function Home (props) {
  if (props.isLoading === true) {
    return (<Loading />)
  }

  return (
    <article>
      {props.photos.map(function (photo) {
        return <Photo key={photo.id} data={photo} handleLike={props.handleLike}/>
      })}
    </article>
  )
}

Home.propTypes = {
  photos: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleLike: PropTypes.func.isRequired
}

module.exports = Home
