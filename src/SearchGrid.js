import React from 'react'
import Book from './Book'

class SearchGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.props.books.map((book) => (
                        <Book book={book} />
                    ))}
                </ol>
            </div>
        )
    }
}

export default SearchGrid