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
      .then((booksAdded) =>
        this.setState(() => ({
          books: booksAdded
        })))
  }

  updateBooks = (book, shelf) => {
    const newBook = { book, 'stored': shelf }
    BooksAPI.update(book, shelf)
      .then(() => {
        this.setState((prevState) => ({
          books: prevState.books.concat(newBook)
        }))
      }
      )
  }



  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <Main books={this.state.books} handleSelection={this.updateBooks} />
        )} />

        <Route path='/search' render={() => (
          <Search books={this.state.books} handleSelection={this.updateBooks} />
        )} />
      </div>
    )
  }
}

export default BooksApp
