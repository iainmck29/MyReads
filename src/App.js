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
    console.log(book)
    BooksAPI.update(book, shelf)
      .then(() => {
        this.setState((prevState) => ({
          book: {
            ...prevState.book,
            shelf: shelf
          }
        }))
      })
    console.log(book)
  }



  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <Main books={this.state.books} handleSelection={this.updateBooks} />
        )} />
        {console.log(this.state.books)}
        <Route path='/search' render={() => (
          <Search books={this.state.books} handleSelection={this.updateBooks} />
        )} />
      </div>
    )
  }
}

export default BooksApp
