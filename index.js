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

