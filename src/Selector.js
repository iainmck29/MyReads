import React from 'react'

class Selector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    newSelection = (event) => {
        const selection = event.target.value
        if (this.props.book.shelf) {
            const book = this.props.book
            return this.props.handleSelection(book, selection)
        }
        const book = this.props.book
        book['shelf'] = selection
        return this.props.handleSelection(book, selection)
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={this.newSelection} defaultValue={this.props.book.shelf ? this.props.book.shelf : 'none'}>
                    <option value="move" disabled >Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default Selector