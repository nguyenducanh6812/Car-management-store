'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

let app = express();
let db;

app.use(express.static('static'));

/*
 * Get a list of Cars filtered records
 */
app.get('/api/cars', function(req, res) {
  console.log('Query string', req.query);
  let filter = {};
  if (req.query.name)
    filter.name = req.query.name;
  if (req.query.status)
    filter.status = req.query.status;

  db.collection('cars').find(filter).toArray(function(err, docs) {
    res.json(docs);
  });
});

app.use(bodyParser.json());

/*
 * Insert a record
 */
app.post('/api/cars/', function(req, res) {
  console.log("Req body:", req.body);
  let newCar = req.body;
  db.collection("cars").insertOne(newCar, function(err, result) {
    if (err) console.log(err);
    let newId = result.insertedId;
    db.collection("cars").find({_id: newId}).next(function(err, doc) {
      if (err) console.log(err);
      res.json(doc);
    });
  });
});

/*
 * Get a single record
 */
app.get('/api/cars/:id', function(req, res) {
  db.collection('cars').findOne({_id: ObjectId(req.params.id)}, function(err, car) {
    res.json(car);
  });
});

/*
 * Modify one record, given its ID
 */
app.put('/api/cars/:id', function(req, res) {
  let car = req.body;
  delete (car._id);
  console.log('Modifying car:', req.params.id, car);
  let oid = ObjectId(req.params.id);
  db.collection('cars').updateOne({_id: oid}, car, function(err, result) {
    if (err) console.log(err);
    db.collection('cars').find({_id: oid}).next(function(err, doc) {
      if (err) console.log(err);
      res.send(doc);
    });
  });
});

/*
 * Delete one record, given its ID
 */
app.delete('/api/cars/:id', function(req, res){
  let car = req.body;
  console.log('Delete car:', car);
  db.collection('cars').removeOne({_id: ObjectId(car._id)}, function (err, result) {
    if(err) console.log(err);
    console.log('Delete success: ', result);
    db.collection('cars').find().next(function(err, doc) {
      if (err) console.log(err);
      res.send(doc);
    });
  });
});

/*
 * Get message from database
 */
app.get('/api/message', function (req, res) {
  console.log('Querry message string: ', req.query);
  let filter = {};
  filter.server_read = false;
  db.collection('message').find(filter).toArray(function(err, docs) {
    res.json(docs);
  });
})

/*
 * Write message to database
 */
app.post('/api/message/', function(req, res) {
    console.log("Req body:", req.body);
    let newMessage = req.body;
    db.collection("message").insertOne(newMessage, function(err, result) {
        if (err) console.log(err);
        let newId = result.insertedId;
        db.collection("message").find({_id: newId}).next(function(err, doc) {
            if (err) console.log(err);
            console.log('Insert success');
            res.json(doc);
        });
    });
});

/*
 * Update message was read by admin
 */
app.put('/api/message/update', function(req, res) {
    let message = req.body;
    delete (message._id);
    console.log('Req params', req.params);
    console.log('Update message:', message);
    let oid = message.idMessage;
    db.collection('message').updateOne({idMessage: oid}, message, function(err, result) {
        if (err) console.log(err);
        db.collection('message').find({idMessage: oid}).next(function(err, doc) {
            if (err) console.log(err);
            console.log('Server was read message');
            res.send(doc);
        });
    });
});
MongoClient.connect('mongodb://localhost/carsdb', function(err, dbConnection) {
  db = dbConnection;
  let server = app.listen(3000, function() {
    let port = server.address().port;
    console.log('Started server at port', port);
    const io = require('socket.io')(server);
    io.on('connection', (socket) => {
      console.log('a user connected');
      socket.on('disconnect', (data) => {
        console.log('user disconnected',data);
      });
      socket.on('toServer', (data) => {
        socket.broadcast.emit('receiveClient', {message: data.message});
        console.log('server nhan duoc:', data.message);
      });
      socket.on('toClient', (data) => {
        socket.broadcast.emit('receiveServer', {message: data.message});
      });
      });
  });
});

