var express = require('express');
var router = express.Router();
var Mongoclinet=require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/submit',function(req,res){
  console.log(req.body)
  Mongoclinet.connect('mongodb://localhost:27017',function(err,client)
  {
    if(err)
    console.log("Error")
    else
    client.db('nodeapp').collection('user').insertOne(req.body)
  })
  res.send("Value got it")
})

module.exports = router;
