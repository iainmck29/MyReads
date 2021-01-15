import React from 'react'
import Book from './Book'

class SearchGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleSelection = (book, selection) => {
        this.props.handleSelection(book, selection)
    }

    render() {

        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {!this.props.books.error && this.props.books.map((book) => (
                        <li key={book.id}>
                            <Book book={book} handleSelection={this.handleSelection} />
                        </li>
                    ))}

                </ol>
            </div>
        )
    }
}

export default SearchGrid