var React = require('react')
var PropTypes = React.PropTypes

function Photo (props) {
  return (
    <figure className='col-sm-4' onClick={props.handleLike}>
      <img src={props.data.image_url} width="100%"/>
      <figcaption>{props.data.name}</figcaption>
    </figure>
  )
}

Photo.propTpyes = {
  data: PropTypes.object.isRequired,
  handleLike: PropTypes.func.isRequired
}

module.exports = Photo
