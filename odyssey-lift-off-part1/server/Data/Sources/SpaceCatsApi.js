const { RESTDataSource } = require('apollo-datasource-rest')

class SpaceCatsApi extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/'
    }

    getSpaceCats() {
        return this.get('spacecats')
    }

    getMissions(catId) {
        return this.get(`spacecats/${encodeURIComponent(catId)}/missions`)
    }
}