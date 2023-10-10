import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  const changewidth = (e) => {
    e.target.parentElement.nextElementSibling.classList.add("width");
  };
  const changeWidthTo0 = (e) => {
    // if (
    //   e.target.parentElement.parentElement.parentElement.contains("width")
    // ) {
    //   e.target.parentElement.parentElement.parentElement.style.width = "0px";
    // }
    e.target.parentElement.parentElement.parentElement.classList.remove(
      "width"
    );
  };
  window.addEventListener("resize", () => {
    const Sidebar = document.querySelector(".Sidebar");
    if (window.innerWidth > 764) {
      Sidebar.classList.remove("width");
    }
  });
  return (
    <>
      <div className="button">
        <i
          className="fa-solid fa-filter fa-lg d-md-none mx-2"
          onClick={changewidth}
        ></i>
      </div>
      <div className="Sidebar bg-secondary text-white col-md-2 pe-0">
        <ul className="list-group h-100 ">
          <li className="list-group-item bg-secondary text-white border-0 py-3">
            <Link
              to="/"
              onClick={(e) => {
                props.PC(e);
                changeWidthTo0(e);
                //  props.progress(0);
                //  props.call(0);
              }}
            >
              General
            </Link>
          </li>
          <li className="list-group-item bg-secondary text-white border-0 py-3">
            <Link
              to="/Science"
              onClick={(e) => {
                props.PC(e);
                changeWidthTo0(e);
                //  props.progress(0);
                //  props.call(0);
              }}
            >
              Science
            </Link>
          </li>
          <li className="list-group-item bg-secondary text-white border-0 py-3">
            <Link
              to="/Business"
              onClick={(e) => {
                props.PC(e);
                changeWidthTo0(e);
                //  props.progress(0);
                //  props.call(0);
              }}
            >
              business
            </Link>
          </li>
          <li className="list-group-item bg-secondary text-white border-0 py-3">
            <Link
              to="/Entertainment"
              onClick={(e) => {
                props.PC(e);
                changeWidthTo0(e);
                //  props.progress(0);
                //  props.call(0);
              }}
            >
              entertainment
            </Link>
          </li>
          <li className="list-group-item bg-secondary text-white border-0 py-3">
            <Link
              to="/Health"
              onClick={(e) => {
                props.PC(e);
                changeWidthTo0(e);
                //  props.progress(0);
                //  props.call(0);
              }}
            >
              health
            </Link>
          </li>
          <li className="list-group-item bg-secondary text-white border-0 py-3">
            <Link
              to="/Sports"
              onClick={(e) => {
                props.PC(e);
                changeWidthTo0(e);
                //  props.progress(0);
                //  props.call(0);
              }}
            >
              sports
            </Link>
          </li>
          <li className="list-group-item bg-secondary text-white border-0 py-3">
            <Link
              to="/Technology"
              onClick={(e) => {
                props.PC(e);
                changeWidthTo0(e);
                //  props.progress(0);
                //  props.call(0);
              }}
            >
              technology
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
