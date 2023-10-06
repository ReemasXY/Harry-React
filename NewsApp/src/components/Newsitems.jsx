import React, { Component } from "react";

export default class Newsitems extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <>
        <div className="col-md-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
