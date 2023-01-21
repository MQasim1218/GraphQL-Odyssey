// TODO: Build ur Fisrt Apollo Server!

const ApolloServer = require('apollo-server').ApolloServer
const GQL_Types = require('./schema')

// This impl of mocks returns realistic data based on our logic
const mocks = {
    Track: () => ({
        id: () => "track_01",
        title: () => "Astro Kitty, Space Explorer",
        author: () => {
            return {
                name: "Grumpy Cat",
                photo:
                    "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
            };
        },
        thumbnail: () =>
            "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
        lengthInMins: () => 1210,
        modulesCount: () => 6,
    }),
};

const server = new ApolloServer({
    typeDefs: GQL_Types,
    mocks: mocks
})

server.listen().then(() => {
    console.log(`
        🛫 Server Up and Running
        🃏 Listening on port http://localhost:4000/ 
    `)
})
