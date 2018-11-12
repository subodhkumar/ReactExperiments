const express = require('express');
const assert = require('assert');
const app = express();
const mongoConnector = require('mongodb').MongoClient;

const PORT = process.env.PORT || 5000;
const mongoUri =
  'mongodb+srv://mongodb-stitch-taskmanager-mglty:mongodbpw@subodhcluster-6mm2m.mongodb.net/test?retryWrites=true';
let mongoClient;
let mongoDB;

// CONNECTION CODE
const connectToDB = () => {
  return new Promise((resolve, reject) => {
    mongoConnector.connect(
      mongoUri,
      { useNewUrlParser: true },
      (err, client) => {
        if (err) {
          console.log(err);
          reject({ response: 'error' });
        } else {
          resolve(client);
          console.log(client);
          // client.close();
        }
      },
    );
  });
};

const closeDB = () => {
  if (mongoClient) {
    mongoClient.close();
  }
};

const getDB = () => {
  if (mongoClient) {
    mongoDB = mongoClient.db('test');
  } else {
    mongoDB = null;
  }
};

app.get('/api/insert', (req, res, next) => {
  if (mongoDB) {
    const collection = mongoDB.collection('test');
    collection.insertMany([
      { name: 'AAA' },
      { name: 'BBB' },
      { name: 'CCC' },
      { name: 'DDD' },
    ]);
    res.send({ response: 'INSERT SUCCESS' });
  } else {
    res.send({ response: 'INSERT FAILURE' });
  }
});

app.get('/api/query', (req, res, next) => {
  if (mongoDB) {
    const collection = mongoDB.collection('test');
    collection.find({}).toArray((err, doc) => {
      console.log(`Doc | ${JSON.stringify(doc)}`);
    });
    res.send({ response: 'DB SUCCESS' });
  } else {
    res.send({ response: 'DB FAILURE' });
  }
});

app.get('/connect', (req, res, next) => {
  connectToDB()
    .then(client => {
      mongoClient = client;
      getDB();
      res.send({ response: 'success' });
    })
    .catch(err => {
      res.send({ error: err });
    });
});

app.get('/close', (req, res, next) => {
  closeDB();
  res.send({ status: 'closed' });
});

app.get('/', (req, res, next) => {
  res.send({ response: 'From Server' });
});
app.listen(PORT, () => {
  console.log(` Server running ${PORT}`);
});
