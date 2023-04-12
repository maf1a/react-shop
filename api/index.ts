import 'dotenv/config'

import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';

import { typeDefs } from './graphql/typederfs'
import { resolvers } from './graphql/resolvers'
import { seed } from './seed/seed';

const url = `mongodb+srv://${process.env.GQL_USER}:${process.env.GQL_PASS}@shop-database.2jmwljt.mongodb.net/?retryWrites=true&w=majority`

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

mongoose.connect(url)
    .then(async () => {
        const app = express()
        await server.start();
        server.applyMiddleware({ app });

        const port = process.env.PORT || 5000
        // seed()
        app.listen(port, () => {
            console.log("app started on port", port)
        });
    })
