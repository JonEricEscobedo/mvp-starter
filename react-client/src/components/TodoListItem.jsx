import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    }
  }

  toggleCompleted() {
    let newState = this.setState({
      completed: true
    })
    this.props.delete(this.props.item._id);
  }

  render() {
    return(
      <div onClick={this.toggleCompleted.bind(this)}>{this.props.item.description}</div>
    )
  }
}


export default TodoListItem;