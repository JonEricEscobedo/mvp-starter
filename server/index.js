var express = require('express');
var bodyParser = require('body-parser');
var todos = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/items', function(req, res) {
  todos.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
}); // End of GET method

app.post('/items/import', function(req, res) {
  var newTodo = new todos.Todo({
    date: 1493591494,
    description: req.body.term 
  })

  newTodo.save(function (err, res) {
    if (err) {
      console.log('Error writing to MongoDB');
      throw err;
    } else {
      console.log('Todo saved in MongoDB');
    }
  })

  res.end();
}); // End of POST method

app.delete('/items/delete', function(req, res) {
  console.log('inside delete', req.body.term);
  var todoId = req.body.term;

  todos.Todo.remove({_id: todoId}, function(err, res) {
    if (err) {
      console.log('something broke with delete...');
      throw err;
    } else {
      console.log('Todo deleted');
    }
  })
  res.end();
}); // End of DELETE method

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

