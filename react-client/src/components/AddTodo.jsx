import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }
  
  handleChange(e) {
    this.setState({
      query: e.target.value
    });
  }

  handleClick(query) {
    this.props.onSearch(this.state.query);
    this.setState({
      query: ''
    })
  }

  render () {
    return (
      <div className="col-6">
        <div className="input-group">
          <input className="form-control" type="text" placeholder="Your todo" value={this.state.query} onChange={this.handleChange.bind(this)}/>
          <span className="input-group-btn"><button className="btn btn-secondary" type="button" onClick={this.handleClick.bind(this)}>Add!</button></span>
        </div>
      </div>
    )
  }
}

export default AddTodo;