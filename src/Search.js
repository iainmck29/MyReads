import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import SearchGrid from './SearchGrid'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            returnedBooks: []
        }
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const query = this.state.query;
        if (query !== '') {
            BooksAPI.search(query)
                .then((returnedBooks) =>
                    this.setState(() => ({
                        returnedBooks: returnedBooks
                    })
                    ))
        }

    }

    handleSelection = (book, selection) => {
        this.props.handleSelection(book, selection)
    }


    render() {
        const { query } = this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>
                        <button className="close-search"></button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text"
                                value={query}
                                onChange={(event) => this.updateQuery(event.target.value)}
                                placeholder="Search by title or author" />
                        </form>
                    </div>

                </div>
                <SearchGrid books={this.state.returnedBooks} handleSelection={this.handleSelection} />

            </div>
        )
    }
}

export default Search