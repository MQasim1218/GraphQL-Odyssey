const { gql } = require('apollo-server')

module.exports = GQL_Types = gql`

    type Query {
        homepageTracks: [Track!]!
        spaceCats: [SpaceCat]
    }

    type Track {
        id: ID!
        title: String!
        author: Author!
        lengthInMins: Int,
        "URL to the file location!"
        thumbnail: String
        modulesCount: Int
    }

    type Author{
        id: ID!
        name: String!
        photo: String
    }

    type SpaceCat {
        id: ID!
        name: String!
        age: Int
        missions:[Mission]
    }

    type Mission {
        id: ID!
        name: String!
        description: String!
    }
`