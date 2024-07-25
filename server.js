const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

const url = 'mongodb+srv://sammympow:<password>@cluster.1oyaw3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster'; 
const dbName = 'bmiCalculator'; 

let db;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error(err);
        return;
    }
    db = client.db(dbName);
    console.log('Connected to database');
});

// Endpoint to store BMI data
app.post('/storeData', (req, res) => {
    const { weight, height, bmi, date } = req.body;
    const collection = db.collection('bmiData');

    collection.insertOne({ weight, height, bmi, date }, (err, result) => {
        if (err) {
            res.status(500).send('Error inserting data');
        } else {
            res.status(200).send('Data inserted successfully');
        }
    });
});

