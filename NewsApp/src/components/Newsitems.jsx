import React, { Component } from "react";

export default class Newsitems extends Component {
  render() {
    let { title, description, imageurl } = this.props;

    return (
      <>
        <div className="card h-100">
          <img
            src={imageurl}
            className="card-img-top"
            alt="..."
            style={{ height: "300px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title + "..."}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-footer border-0 bg-white">
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
