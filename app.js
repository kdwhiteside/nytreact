var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title:  String,
  date: { type: Date},
  url:   String
});

var Article = mongoose.model('Article', articleSchema);

var thisArticle = new Article({ key: 'value' });
thisArticle.save(function (err) {
  if (err) {
  	console.log(err);
  }
})

// or

Tank.create({ size: 'small' }, function (err, small) {
  if (err) return handleError(err);
  // saved!
})

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  console.log("Connected successfully to server");

  db.close();
});
