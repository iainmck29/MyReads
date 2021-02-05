import React from 'react'
import Book from './Book'

class SearchGrid extends React.Component {

    handleSelection = (book, selection) => {
        this.props.handleSelection(book, selection)
    }

    append = (book, selection) => {
        this.props.append(book, selection)
    }


    render() {

        return (
            <div className="search-books-results">
                <ol className="books-grid">

                    {this.props.books && !this.props.books.error && this.props.books.map((book) => {
                        const bookOnShelf = this.props.shelfBooks.find(
                            ({ id }) => book.id === id
                        );
                        const shelf = bookOnShelf ? bookOnShelf.shelf : 'none';
                        return (
                            <li key={book.id}>
                                <Book
                                    book={{ ...book, shelf }}
                                    append={this.append}
                                    handleSelection={this.handleSelection}
                                />
                            </li>
                        );
                    })
                    }
                </ol>
            </div>
        )
    }
}

export default SearchGrid