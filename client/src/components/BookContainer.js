import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Title from "./Title"

class BookContainer extends Component {
  state = {
    currentPage: "Search"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderpage = () => {
    switch (this.state.currentPage) {
      case "Saved":
        return <Saved />
      default :
        return <Search />
    }
  }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <Title />
        {this.renderpage()}
      </div>
    );
  }
}

export default BookContainer;
