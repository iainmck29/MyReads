import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'


class Main extends React.Component {

    handleSelection = (book, selection) => {
        this.props.handleSelection(book, selection)
    }

    render() {
        const { books } = this.props

        books.map((book) => (
            console.log(book.shelf)))

        const current = this.props.books.filter((book) => (
            book.shelf === 'currentlyReading'
        )
        )

        const want = this.props.books.filter((book) => (
            book.shelf === 'wantToRead'
        ))

        const read = this.props.books.filter((book) => (
            book.shelf === 'read'
        ))

        return (

            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <Shelf shelfName="Currently Reading" books={current} handleSelection={this.handleSelection} />
                        <Shelf shelfName="Want to read" books={want} handleSelection={this.handleSelection} />
                        <Shelf shelfName="Read" books={read} handleSelection={this.handleSelection} />
                    </div>
                    <div className="open-search">
                        <Link to='/search'>
                            <button>Add a book</button>
                        </Link>

                    </div>
                </div>
            </div>
        )
    }


}


export default Main
