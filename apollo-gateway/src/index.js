require('dotenv').config();
const { ApolloGateway } = require('@apollo/gateway');
const { ApolloServer } = require('apollo-server');

const gateway = new ApolloGateway({
    serviceList: [
        { name: 'user-service', url: process.env.USER_SERVICE_URL || 'http://localhost:8081/graphql' },
        { name: 'product-service', url: process.env.PRODUCT_SERVICE_URL || 'http://localhost:4000/graphql' }, // Placeholder
        { name: 'order-service', url: process.env.ORDER_SERVICE_URL || 'http://localhost:8083/graphql' },
    ],
});

const server = new ApolloServer({
    gateway,
    subscriptions: false,
});

server.listen().then(({ url }) => {
    console.log(`🚀 Apollo Gateway is running at ${url}`);
});
