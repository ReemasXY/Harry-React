import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
// import News from "./components/News";
import News from "./components/Newsfunctionbased";
import Sidebar from "./components/Sidebar";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      path: "/",
      cate: "General",
      progress: 0,
      p: 0,
    };
  }
  apikey = import.meta.env.VITE_API_KEY;
  handlePathCategory = (e) => {
    this.setState({
      path: `${
        e.target.innerText === "General" ? "/" : "/" + e.target.innerText
      }`,
      cate: `${e.target.innerText}`,
    });
    console.log("e  called");
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
    console.log(progress);
  };
  // call = (p) => {
  //   this.setState({
  //     p: p,
  //   });
  //   console.log(p);
  // };
  render() {
    return (
      <>
        <Router>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Navbar />
          <div
            className="container-fluid d-flex align-items-start row p-0 mx-auto "
            style={{ marginTop: "56px", width: "100vw" }}
          >
            <Sidebar
              PC={this.handlePathCategory}
              // progress={this.setProgress}
              // call={this.call}
            />
            <Routes>
              <Route
                exact
                path={this.state.path}
                element={
                  <News
                    apikey={this.apikey}
                    setProgress={this.setProgress}
                    pageSize={10}
                    country="in"
                    cate={this.state.cate}
                    key={this.state.cate}
                  />
                }
              ></Route>
            </Routes>

            {console.log(import.meta.env.VITE_API_KEY)}
          </div>
        </Router>
      </>
    );
  }
}
