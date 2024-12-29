const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        _placeholder: String
    }
`;

const resolvers = {
    Query: {
        _placeholder: () => "This is a placeholder subgraph.",
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000).then(({ url }) => {
    console.log(`Placeholder subgraph running at ${url}`);
});
