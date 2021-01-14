import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        { console.log(this.props.books) }
        return (

            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <Shelf shelfName="Currently Reading" books={this.props.books} />
                        <Shelf shelfName="Want to read" books={this.props.books} />
                        <Shelf shelfName="Read" books={this.props.books} />
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
