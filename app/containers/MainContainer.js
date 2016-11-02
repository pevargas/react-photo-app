var React = require('react')
var Main = require('../components/Main')

var MainContainer = React.createClass({
  getInitialState: function () {
    return {
      likeCount: 0
    }
  },
  render: function () {
    return (
      <Main likeCount={this.state.likeCount}/>
    )
  }
})

module.exports = MainContainer
