import React, {Component} from 'react';
import './App.css';
import Loader from './BooksPanel/Loader/Loader';
import Book from './BooksPanel/Book/Book';
import FireBase from './Fire';

class App extends Component {

  googleBooksUrl = "https://www.googleapis.com/books/v1";
  googleBooksQuery = "/volumes?q=game%20of&orderBy=newest";

  constructor() {
    super();
    this.state = {
      bookData: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({isLoading: true});
    fetch(this.googleBooksUrl + this.googleBooksQuery)
      .then(response => response.json())
      .then(data => {
        let books = data.items.map(book => {
          return (
            <Book
              bookId={book.id}
              title={book.volumeInfo.title}
              thumbnail={book.volumeInfo.imageLinks.thumbnail}
              description={book.searchInfo.textSnippet}
            />
          )
        });
        console.log(data);
        this.setState({bookData: books, isLoading: false});
      })
      .catch(error => this.setState({error, isLoading: false}));
  }

  render() {
    return (
      <div className="App">
        <Loader isLoading={this.state.isLoading}/>
        {/*{this.loader(this.state.isLoading)}*/}
        <div className="Books">
          {this.state.bookData}
        </div>
      </div>
    );
  }
}

export default App;
