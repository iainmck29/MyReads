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
            query
        }))
    }

    handleSubmit = (e) => {
        const query = this.state.query;
        if (query === '') {
            this.setState(() => ({
                returnedBooks: []
            }))
        }
        else if (query !== '') {
            BooksAPI.search(query)
                .then((returnedBooks) =>
                    this.setState(() => ({
                        returnedBooks
                    })
                    ))
        }


    }

    handleSelection = (book, selection) => {
        this.props.handleSelection(book, selection)
    }

    append = (book, selection) => {
        this.props.append(book, selection)
    }


    render() {
        const { query } = this.state
        console.log(this.state.query)
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>
                        <button className="close-search"></button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <form onChange={this.handleSubmit}>
                            <input type="text"
                                value={query}
                                onChange={(event) => this.updateQuery(event.target.value)}
                                placeholder="Search by title or author" />
                        </form>
                    </div>

                </div>
                <SearchGrid books={this.state.returnedBooks} append={this.append} handleSelection={this.handleSelection} />

            </div>
        )
    }
}

export default Search