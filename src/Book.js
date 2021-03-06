import React from 'react'
import Selector from './Selector'

class Book extends React.Component {

    handleSelection = (book, selection) => {
        this.props.handleSelection(book, selection)
    }

    append = (book, selection) => {
        this.props.append(book, selection)
    }


    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={this.props.book.imageLinks && {
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`,

                    }}></div>
                    <Selector handleSelection={this.handleSelection} append={this.append} book={this.props.book} />
                </div>
                <div className="book-title">{this.props.book.title ? this.props.book.title : 'no title provided'}</div>
                <div className="book-authors">{this.props.book.authors ? this.props.book.authors : 'no authors provided'}</div>
            </div>
        )
    }
}

export default Book