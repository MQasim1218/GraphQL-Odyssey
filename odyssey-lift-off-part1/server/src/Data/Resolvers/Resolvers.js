
const resolvers = {

    Query: {
        // ! Resolver Signature
        // * feild: (parent, args, context, info) => { }

        homepageTracks: (_, __, { dataSources }) => {
            return dataSources.tracksApi.getTracksForHome()
        },
        spaceCats: (parent, args, { dataSources }) => {
            return dataSources.spaceCatsApi.getSpaceCats()
        },

        // SECTION: Singles 
        track: (_, { id }, { dataSources }) => {
            return dataSources.tracksApi.getSingleTrack(id)
        },
        spaceCat: (_, { id }, { dataSources }) => {
            return dataSources.spaceCatsApi.getSpaceCat(id)
        },

        Track: {
            author: (track, _, { dataSources }) => {
                console.log(track.authorId)
                return dataSources.tracksApi.getTrackAuthor(track.authorId)
            },

            modules: ({ modules }, _, { dataSources }) => {
                return dataSources.tracksApi.getTrackModule()
            }
        },

        SpaceCat: {
            missions: (space_cat, __, { dataSources }) => {
                return dataSources.spaceCatsApi.getMissions(space_cat.catId)
            }
        },
    }


module.exports = resolvers