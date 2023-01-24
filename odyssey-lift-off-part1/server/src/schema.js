const { gql } = require('apollo-server')

module.exports = GQL_Types = gql`
    type Query {
        homepageTracks: [Track!]!
        spaceCats: [SpaceCat]
        track(id: ID!): Track
        spacecat(id: ID!): SpaceCat
        missions(to: String, scheduled: Boolean) : [Mission] 
    }

    type Track {
        id: ID!
        title: String!
        author: Author!
        length: Int,
        "URL to the file location!"
        thumbnail: String
        modulesCount: Int
        numOfViews: Int
        description: String
        modules: [Module!]!
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

    type Module {
        id: ID!
        title: String
        length: Int
    }
`