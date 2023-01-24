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
        return this.get(`author/${encodeURIComponent(authorId)}`)
    }

    getSingleTrack(trackid) {
        return this.get(`track/${encodeURIComponent(trackid)}`)
    }

    getTrackModule(trackid) {
        return this.get(`track/${encodeURIComponent(trackid)}/modules`)
    }
}

module.exports = TracksApi // 🥬  