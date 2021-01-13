import React from 'react'
import Selector from './Selector'

class Book extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `${this.props.bookUrl}` }}></div>
                    <Selector />
                </div>
                <div className="book-title">{this.props.book.title ? this.props.book.title : 'no title provided'}</div>
                <div className="book-authors">{this.props.book.authors ? this.props.book.authors : 'no authors provided'}</div>
            </div>
        )
    }
}

export default Book