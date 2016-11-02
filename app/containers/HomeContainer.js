var React = require('react')
var Home = require('../components/Home')
var photoHelper = require('../utils/photoHelper')

var HomeContainer = React.createClass({
  getPhotos: function (page) {
    photoHelper.getPopularPhotos(page)
      .then(function (response) {
        this.setState({
          isLoading: false,
          photos: this.state.photos.concat(response.photos),
          page: response.current_page,
          total: response.total_pages
        })
      }.bind(this))
  },
  handleLike: function (event) {
    console.log('LIKE', event)
  },
  getInitialState: function () {
    return {
      isLoading: true,
      photos: [],
      page: 1,
      total: 100
    }
  },
  componentDidMount: function () {
    this.getPhotos(this.state.page)
  },
  render: function () {
    return (
      <Home
        isLoading={this.state.isLoading}
        photos={this.state.photos}
        handleLike={this.handleLike} />
    )
  }
})

module.exports = HomeContainer
