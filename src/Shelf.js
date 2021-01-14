import React from 'react'
import Book from './Book'

class Shelf extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleSelection = (book, selection) => {
        this.props.handleSelection(book, selection)
    }

    render() {
        console.log(this.props.books)
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li key={book.id}>
                                <Book book={book} handleSelection={this.handleSelection} />
                            </li>
                        ))}

                    </ol>
                </div>
            </div >
        )
    }
}


export default Shelf