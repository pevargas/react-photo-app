var React = require('react')
var Link = require('react-router').Link

function Navbar (props) {
  return (
    <div className='navbar navbar-default'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <Link to='/'>
            <div className='navbar-brand'>React Photo App</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

module.exports = Navbar
