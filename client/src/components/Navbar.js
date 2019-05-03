import React from "react";

function NavTabs(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/saved">
        Saved
      </a>
      <a className="navbar-brand" href="/">
        Search
      </a>
    </nav>
  );
}

export default NavTabs;
