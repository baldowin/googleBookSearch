import React, { Component } from "react";
import Book from "../Book"
import API from "../../API";

class Search extends Component{
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
                Still under development
            </div>
        )
    }
}

export default Search;