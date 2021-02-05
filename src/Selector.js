import React from 'react'

class Selector extends React.Component {

    newSelection = (event) => {
        const selection = event.target.value
        const book = this.props.book
        if (book.shelf) {
            return this.props.handleSelection(book, selection)
        }
        return this.props.append(book, selection)
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={this.newSelection} defaultValue={this.props.book.shelf}>
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