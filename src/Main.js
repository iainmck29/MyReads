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
        return (

            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <Shelf shelfName="Currently Reading" bookUrl={this.getBooks} />
                        <Shelf shelfName="Want to read" />
                        <Shelf shelfName="Read" />
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
