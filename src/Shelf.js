import React from 'react'
import Book from './Book'

class Shelf extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <Book bookURl={this.props.bookURL} />
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}


export default Shelf