const express = require('express');
const cors = require('cors');

const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();

const jwt = require('jsonwebtoken');

const port = process.env.PORT || 5000;

const app = express()

// middleware
app.use(cors());
app.use(express.json());

console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);


// 

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jjkmnej.mongodb.net/?retryWrites=true&w=majority`;

console.log(uri);


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

    try {

        const usersCollection = client.db("TechBook").collection("users");
        const postCollection = client.db("TechBook").collection("posts");

        // users

        // Post a user
        app.post("/users", async (req, res) => {
            const query = req.body;
            const result = await usersCollection.insertOne(query);
            res.send(result);
        });

        // PUT -- Update a User
        app.put("/users", async (req, res) => {
            const userName = req.body.userName;
            const data = req.body;
            const query = { userName: userName };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    userName: data.userName,
                    userEmail: data.userEmail,
                    userPhoto: data.userPhoto,
                    university: data.university,
                    address: data.address,
                    Phone: data.Phone,
                    Birthday: data.Birthday,
                    Gender: data.Gender,
                },
            };
            const result = await userCollection.updateOne(query, updateDoc, options);
            res.send(result);
        });


        // posts

        // Post a Post
        app.post("/posts", async (req, res) => {
            const query = req.body;
            const result = await postCollection.insertOne(query);
            res.send(result);
        });

        // Get all Post
        app.get("/posts", async (req, res) => {
            const query = {};
            const result = await postCollection.find(query).toArray();
            res.send(result);
        });

    }

    // 

    finally {

    }

}

run().catch((err) => console.error(err));

// 

app.get('/', (req, res) => {
    res.send('TechBook server is running...')
})

app.listen(port, () => {
    console.log(`TechBook running/listening on port ${port}`)
})

