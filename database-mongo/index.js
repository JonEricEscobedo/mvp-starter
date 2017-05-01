var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolist');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var todoSchema = mongoose.Schema({
  date: Number,
  description: String
});

var Todo = mongoose.model('Todo', todoSchema);

var selectAll = function(callback) {
  Todo.find({}, function(err, todos) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, todos);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.Todo = Todo;
// module.exports = Todo;