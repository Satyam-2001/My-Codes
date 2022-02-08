// const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient

import { MongoClient } from "mongodb";

const password = `Satyam@2001`;
const databaseName = `cluster0`;
const url = `mongodb+srv://Satyam2001:${encodeURIComponent(password)}@${databaseName}.3bctm.mongodb.net/cluster0?retryWrites=true&w=majority`;


const client = new MongoClient(url);

function run() {
    await client.connect()
    const database = client.db(databaseName);

    const foods = database.collection("users");

    // create an array of documents to insert

    const docs = [

        { name: "cake", healthy: false },

        { name: "lettuce", healthy: true },

        { name: "donut", healthy: false }

    ];


    const options = { ordered: true };

    const result = await foods.insertMany(docs, options);

    console.log(`${result.insertedCount} documents were inserted`);
}

run()

// MongoClient.connect(url, (error, client) => {
//     if (error) {
//         return console.log("Unable to connect to Database")
//     }

//     const db = client.db(databaseName)
//     // db.collection('users').insertOne({
//     //     name: `Shivam`,
//     //     age: 28
//     // }, (error, result) => {
//     //     if (error) {
//     //         return console.log("Unable to insert to user")
//     //     }
//     //     console.log(result)
//     // })

//     const insert = db.collection('users')
//     const result = await insert.insertMany([
//         {
//             name: `Satyam`,
//             age: 20
//         },
//         {
//             name: `Shivam`,
//             age: 28
//         }
//     ], (error, result) => {
//         if (error) {
//             return console.log("Unable to insert to user")
//         }
//         console.log(result)
//     })
//     console.log(result)
// })