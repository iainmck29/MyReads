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
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }


  componentDidMount() {
    BooksAPI.getAll()
      .then((books) =>
        this.setState(() => ({
          books
        })))
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <Main />
        )} />

        <Route path='/search' render={() => (
          <Search books={this.state.books} />
        )} />
      </div>
    )
  }
}

export default BooksApp
