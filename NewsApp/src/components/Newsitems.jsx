import React, { Component } from "react";

const Newsitems = (props) => {
  let { title, description, imageurl, date, author, url } = props;

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
          <p className="card-text d-flex flex-column gap-1  ">
            <small className="text-muted">
              Date: {new Date(date).toGMTString()}
            </small>
            <small className="text-muted">By {author}</small>
          </p>
          <a
            href={url}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};
export default Newsitems;
