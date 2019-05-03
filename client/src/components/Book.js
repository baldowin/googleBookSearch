import React, { Component } from "react";
import API from "../utils/API";

class Book extends Component {
    state = {
        book: {}
      };
    componentDidMount() {
        API.getBook(this.props.match.params.id)
        .then(res => this.setState({ book: res.data }))
        .catch(err => console.log(err));
    }
    render(){
        <div>
            <img src={this.state.book.image}/>
            <h2>{this.state.book.title} by {this.state.book.author}</h2>
            <p>{this.state.book.description}</p>
            <a href={this.state.book.link}>Find on Google Books</a>
        </div>
    }
}

export default Book;