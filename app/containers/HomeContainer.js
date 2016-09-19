var React = require('react')
var Home = require('../components/Home')
var photoHelper = require('../utils/photoHelper')

var HomeContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      data: {}
    }
  },
  componentDidMount: function () {
    photoHelper.getPopularPhotos()
      .then(function (data) {
        this.setState({
          isLoading: false,
          data: data
        })
      }.bind(this))
  },
  render: function () {
    return (
      <Home
        isLoading={this.state.isLoading}
        data={this.state.data} />
    )
  }
})

module.exports = HomeContainer
