import express from 'express';
import axios from 'axios'
import cors from 'cors'
import { ApolloServer, gql } from 'apollo-server-express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers.js';

dotenv.config()
const port = 4000;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

async function startApolloServer() {
  await server.start();

  server.applyMiddleware({ app });

}
startApolloServer()

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true})
// .then(()=>{
//     app.listen(port, ()=>console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`))
// })
.then(()=>{
    console.log('Connected to MongoDB')
    return app.listen({port:port})
})
.then(res=>{
    console.log(`server running at localhost:${port}`)
})