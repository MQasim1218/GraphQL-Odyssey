// TODO: Build ur Fisrt Apollo Server!

const ApolloServer = require('apollo-server').ApolloServer
const GQL_Types = require('./schema')

// This impl of mocks returns realistic data based on our logic
const mocks = {
    Track: () => ({
        id: () => 20,
        title: () => 'CattyWalks',
        author: () => ({
            id: () => 2,
            name: () => 'grumpy'
        }),
        lengthInMins: () => 12,
    }),
    Author: () => ({
        id: () => 20,
        title: () => 'CattyWalks',
    })
}

const server = new ApolloServer({
    typeDefs: GQL_Types,
    mocks: true
})

server.listen().then(() => {
    console.log(`
        🛫 Server Up and Running
        🃏 Listening on port http://localhost:4000/ 
    `)
})
