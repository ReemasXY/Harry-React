import React, { Component } from "react";
import Newsitems from "./Newsitems";

export default class News extends Component {
  render() {
    return (
      <div style={{ marginTop: "56px" }} className="container">
        <h2>NewsSeven- Top headlines</h2>
        <div className="row gx-4 gy-4">
          <Newsitems title="mytitile" />
          <Newsitems title="mytitile" />
          <Newsitems title="mytitile" />
          <Newsitems title="mytitile" />
          <Newsitems title="mytitile" />
          <Newsitems title="mytitile" />
        </div>
      </div>
    );
  }
}
