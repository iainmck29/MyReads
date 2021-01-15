import React from 'react'
import * as BooksAPI from './BooksAPI'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import { Route } from 'react-router-dom'
import Main from './Main'

class BooksApp extends React.Component {
  state = {
    books: []
  }


  componentDidMount() {
    BooksAPI.getAll()
      .then((books) =>
        this.setState(() => ({
          books
        })))

  }

  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.setState((prevState) => ({
          books: prevState.books.map((shelfBook) => {
            if (shelfBook.id === book.id) {
              return { ...shelfBook, shelf };
            } else return shelfBook;
          }),
        }));
      })
  }

  append = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.setState((prevState) => ({
          books: prevState.books
            .filter((shelfBook) => shelfBook.id !== book.id)
            .concat({ ...book, shelf }),
        }));

      })
  }



  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <Main books={this.state.books} handleSelection={this.updateBooks} />
        )} />

        <Route path='/search' render={() => (
          <Search books={this.state.books} handleSelection={this.updateBooks} append={this.append} />
        )} />
      </div>
    )
  }
}

export default BooksApp
