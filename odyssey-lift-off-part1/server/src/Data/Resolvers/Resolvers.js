
const resolvers = {

    Query: {
        // ! Resolver Signature
        // * feild: (parent, args, context, info) => { }

        homepageTracks: (_, __, { dataSources }) => {
            return dataSources.tracksApi.getTracksForHome()
        },
        spaceCats: (parent, args, { dataSources }) => {
            return dataSources.spaceCatsApi.getSpaceCats()
        }
    },

    Track: {
        author: (track, _, { dataSources }) => {
            console.log(track)
            return dataSources.tracksApi.getAuthor(track.authorId)

        }
    },

    SpaceCat: {
        missions: (space_cat, __, { dataSources }) => {
            return dataSources.spaceCatsApi.getMissions(space_cat.catId)
        }
    }
}


module.exports = resolvers