const { RESTDataSource } = require('apollo-datasource-rest')

class TracksApi extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/'
    }

    getTracksForHome() {
        return this.get('tracks')
    }

    getTrackAuthor(authorId) {
        this.get(`author/${encodeURIComponent(authorId)}`)
    }
}

module.exports = TracksApi // 🥬  