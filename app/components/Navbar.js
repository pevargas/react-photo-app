var React = require('react')
var Link = require('react-router').Link
var PropTypes = React.PropTypes

function Navbar (props) {
  return (
    <div className='navbar navbar-default'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <Link to='/'>
            <div className='navbar-brand'>React Photo App</div>
          </Link>
        </div>
        <p className='navbar-text'>{props.likeCount} Like{props.likeCount === 1 ? '' : 's'}</p>
      </div>
    </div>
  )
}


module.exports = Navbar
