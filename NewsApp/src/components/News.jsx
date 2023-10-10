import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

import PropTypes from "prop-types";
export default class News extends Component {
  articles = [];

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    cate: PropTypes.string,
  };
  static defaultProps = {
    country: "us",
    pageSize: 8,
    cate: "general",
    page: 1,
  };
  count = 1;
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      page: 1,
      loading: false,
      cat: this.props.cate,
      totalarticles: 0,
    };
    document.title = this.state.cat + "- NewsSeven";
  }

  // func = () => {
  //   console.log(this.count);
  //   this.count += 1;
  // };

  // async bothClicks() {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.state.cat}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({
  //     loading: true,
  //   });
  //   console.log("called", this.state.page);

  //   let response = await fetch(url);
  //   console.log("called", this.state.page);

  //   let result = await response.json();
  //   this.articles = result.articles.filter((res) => {
  //     if (res.title && res.urlToImage && res.description) {
  //       return res;
  //     }
  //   });
  //   this.setState({
  //     articles: this.articles,
  //     totalarticles: result.totalResults,
  //     filterdarticles: this.articles.length,
  //     loading: false,
  //   });
  // }
  async componentDidMount() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.state.cat}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    this.props.setProgress(50);

    let response = await fetch(url);
    let result = await response.json();
    this.articles = result.articles.filter((res) => {
      if (res.title && res.urlToImage && res.description) {
        return res;
      }
    });
    this.setState({
      articles: this.articles,
      totalarticles: result.totalResults,
      nullArticles: this.nullArticles,
      loading: false,
    });

    this.props.setProgress(100);
  }

  // handleNextClick = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.bothClicks();
  // };

  // handlePreviousClick = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.bothClicks();
  // };
  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.state.cat}&apiKey=${this.props.apikey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let response = await fetch(url);
    let result = await response.json();
    this.articles = result.articles.filter((res) => {
      if (res.title && res.urlToImage && res.description) {
        return res;
      }
    });

    this.setState({
      articles: this.state.articles.concat(this.articles),
      totalarticles: result.totalResults,

      loading: false,
      page: this.state.page + 1,
    });
  };

  render() {
    return (
      <>
        <div className="container col-10 d-flex flex-column px-auto">
          <h2 className="text-center m-4">
            NewsSeven- Top {this.state.cat} headlines{" "}
          </h2>
          {/* {this.state.loading && <Loader />} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={
              this.state.page !==
              Math.ceil(this.state.totalarticles / this.props.pageSize)
            }
            loader={<Loader />}
          >
            <div className="container">
              <div className="row gx-4 gy-4">
                {this.state.articles.map((item) => (
                  <div className="col-md-4" key={item.url}>
                    <Newsitems
                      title={item.title.slice(0, 44)}
                      description={item.description}
                      imageurl={item.urlToImage}
                      date={item.publishedAt}
                      author={item.author ? item.author : "Unknown"}
                      url={item.url}
                    />
                  </div>
                ))}
                {/* {console.log(
                  this.state.articles.length,
                  this.state.totalarticles,
                  this.state.nullArticles.length,
                  this.state.articles.length + this.state.nullArticles.length,
                  this.state.totalarticles - this.state.nullArticles.length
                )} */}
              </div>
            </div>
          </InfiniteScroll>

          {/* <div className="container d-flex justify-content-between my-4">
            <button
              className="btn btn-dark"
              onClick={this.handlePreviousClick}
              disabled={this.state.page === 1}
            >
              Previous
            </button>
            <button
              className="btn btn-dark"
              onClick={this.handleNextClick}
              disabled={
                this.state.page >=
                Math.ceil(this.state.totalarticles / this.props.pageSize)
              }
            >
              Next
            </button>
          </div> */}
        </div>
      </>
    );
  }
}
