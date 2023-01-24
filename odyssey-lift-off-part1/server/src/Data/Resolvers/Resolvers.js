
const resolvers = {

    Query: {
        // ! Resolver Signature
        // * feild: (parent, args, context, info) => { }

        homepageTracks: async (_, __, { dataSources }) => {
            return await dataSources.tracksApi.getTracksForHome()
        },
        spaceCats: async (parent, args, { dataSources }) => {
            return await dataSources.spaceCatsApi.getSpaceCats()
        },

        // SECTION: Singles 
        track: (_, { id }, { dataSources }) => {
            return dataSources.tracksApi.getSingleTrack(id)
        },
        spaceCat: (_, { id }, { dataSources }) => {
            return dataSources.spaceCatsApi.getSpaceCat(id)
        },
    },

    Track: {
        author: (track, _, { dataSources }) => {
            console.log(track.authorId)
            return dataSources.tracksApi.getTrackAuthor(track.authorId)
        },

        modules: async ({ id }, _, { dataSources }) => {
            return await dataSources.tracksApi.getTrackModules(id)
        }
    },

    SpaceCat: {
        missions: async (space_cat, __, { dataSources }) => {
            return dataSources.spaceCatsApi.getMissions(space_cat.catId)
        }
    },
}


module.exports = resolvers