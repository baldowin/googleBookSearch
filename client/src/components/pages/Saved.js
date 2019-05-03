import React, { Component } from "react";
import Book from "../Book"
import API from "../../API";

class Saved extends Component{
  state={
      books: [],
      title: "",
      author: "",
      description: "",
      image: "",
      link: ""
  }

    componentDidMount() {
        this.loadBooks();
    }
    
    loadBooks = () => {
        API.getBooks()
        .then(res =>
            this.setState({ books: res.data, title: "", author: "", description: "",image:"",link:"" })
        )
        .catch(err => console.log(err));
    };

    deleteBook = id => {
    API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    };
    render(){
        return (
            <div>
                {this.state.books.length ? (
                    this.state.books.map(book => <Book 
                        book={book}/>)
                ): (
                    <h3>No Results to Display</h3>
                )}
            </div>
        )
    }
}

export default Saved;