var axios = require('axios')

var baseUrl = 'https://api.500px.com/v1/'
var consumerKey = 'JdEkgbSwBjtc9wATXTQ3wlboykFh3SWdbOsNYUtp'

var helpers = {}

helpers.getPopularPhotos = function (page) {
  if (page === null) {
    page = 1
  }
  var config = {
    params: {
      feature: 'popular',
      sort: 'created_at',
      page: `${page}`,
      image_size: '4',
      exclude: 'nsfw,nude',
      include_store: 'store_download',
      include_states: 'voted',
      consumer_key: consumerKey
    }
  }
  return axios.get(baseUrl + 'photos', config)
    .then(function (response) {
      console.log('500px', response)
      return response.data
    })
    .catch(function (err) {
      console.warn('Error in getPopularPhotos', err)
    })
}

module.exports = helpers
