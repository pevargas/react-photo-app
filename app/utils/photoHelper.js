var axios = require('axios')

var baseUrl = 'https://api.500px.com/v1/'
var consumerKey = 'JdEkgbSwBjtc9wATXTQ3wlboykFh3SWdbOsNYUtp'
var config = {
  params: {
    feature: 'popular',
    sort: 'created_at',
    image_size: '3',
    include_store: 'store_download',
    include_states: 'voted',
    consumer_key: consumerKey
  }
}

var helpers = {}

helpers.getPopularPhotos = function () {
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
