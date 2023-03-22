// this is to take care of the database

import app from "./server.js";
import mongodb from "mongodb";
import ReviewsDAO from "./dao/reviewsDAO.js" //DAO => data aceess Object works in database

const MongoClient = mongodb.MongoClient;
const mongo_username = process.env['MONGO_USERNAME']
const mongo_password = process.env['MONGO_PASSWORD']
const uri = "";

const port = 8000;

MongoClient.connect(
        uri, {
            maxPoolSize: 50, // max number of pipo to connect
            wtimeoutMS: 2500, // time after wc timeout is displayed
            useNewUrlParser: true
        }
    )
    .catch(err => {
        console.error(err.stack)
            .process.exit(1)
    })
    .then(async client => {
        await ReviewsDAO.injectDB(client) //this connects the client review file to the database
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        })
    })