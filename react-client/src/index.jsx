import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import TodoList from './components/TodoList.jsx';
import AddTodo from './components/AddTodo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      // completed: false
    };
  }

  add (todo) {  // CREATE
    console.log(`${todo} was added`);
    var todoTerm = {term: todo};
    var context = this;
    $.ajax({
      url: '/items/import',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(todoTerm)
    })
    .done(function (res) {
      console.log('Todo added');
      context.get();
    })
    .fail(function(err) {
      console.log('Error adding todo');
      throw err;
    })
  };

  get () { // READ
    var context = this;
    $.ajax({
      url: '/items',
    })
    .done(function(data) {
      console.log('Print data to screen...');
      context.setState({
        items: data
      })
    })
    .fail(function(err) {
      console.log('err', err);
    })
  };

  delete (item) { // DELETE
    console.log('delete was called for', item);
    var deleteTodo = {term: item};
    var context = this;
    $.ajax({
      url: '/items/delete',
      type: 'DELETE',
      contentType: 'application/json',
      data: JSON.stringify(deleteTodo)
    })
    .then(function(res){
      console.log('Todo deleted')
      context.get();
    })
    .fail(function(err) {
      console.log('Error deleting todo')
    })
  };

  componentDidMount() {
    this.get();
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <h1>What Todo</h1>
        </div>
        <div className="row">
          <AddTodo onSearch={this.add.bind(this)}/>
        </div>
        <div className="row">
          <TodoList items={this.state.items} delete={this.delete.bind(this)} completed={this.state.completed}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));