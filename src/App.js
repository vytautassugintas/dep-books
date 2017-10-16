import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FireBase from './Fire';

class App extends Component {

  constructor() {
    super();
    this.state = {
      bookData: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({isLoading: true});
    fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0735619670")
      .then(response => response.json())
      .then(data => {
        let books = data.items.map(book => {
          return (
            <div key={book.id}>
              <p>{book.volumeInfo.title} </p>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
              <p>{book.searchInfo.textSnippet}</p>
            </div>
          )
        });
        this.setState({bookData: books, isLoading: false});
        console.log(data.items[0]);
      })
      .catch(error => this.setState({error, isLoading: false}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="Books">
          {this.state.bookData}
        </div>
      </div>
    );
  }
}

export default App;
