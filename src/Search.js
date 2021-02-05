import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import SearchGrid from './SearchGrid'

class Search extends React.Component {
    state = {
        query: '',
        returnedBooks: []
    }

    updateQuery = (e) => {
        const query = e.target.value
        this.setState(() => ({
            query
        }))
        BooksAPI.search(query)
            .then((returnedBooks) =>
                this.setState(() => ({
                    returnedBooks
                })
                ))

    }



    handleSelection = (book, selection) => {
        this.props.handleSelection(book, selection)
    }

    append = (book, selection) => {
        this.props.append(book, selection)
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
                        <input type="text"
                            value={query}
                            onChange={this.updateQuery}
                            placeholder="Search by title or author" />
                    </div>

                </div>
                <SearchGrid books={this.state.returnedBooks} shelvedBooks={this.props.books} append={this.append} handleSelection={this.handleSelection} />

            </div>
        )
    }
}

export default Search