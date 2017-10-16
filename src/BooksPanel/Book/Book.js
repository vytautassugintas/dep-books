import React, {Component} from 'react';

class Book extends Component {
  render() {
    return (
      <div key={this.props.bookId}>
        <h3>{this.props.title}</h3>
        <img src={this.props.thumbnail} alt={this.props.title}/>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Book;