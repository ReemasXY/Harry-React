import React, { useEffect, useState } from "react";
import Newsitems from "./Newsitems";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

import propTypes from "prop-types";
export default function News(props) {
  let articlesArr = [];
  const [articles, setarticles] = useState(articlesArr);
  const [page, setpage] = useState(1);
  const [cat, setcat] = useState(props.cate);
  const [totalarticles, settotalarticles] = useState(0);

  let count = 1;
  const updateFunction = async () => {
    props.setProgress(0);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${cat}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(50);
    let response = await fetch(url);
    let result = await response.json();
    articlesArr = result.articles.filter((res) => {
      if (res.title && res.urlToImage && res.description) {
        return res;
      }
    });
    setarticles(articlesArr);
    settotalarticles(result.totalResults);
    props.setProgress(100);
  };
  useEffect(() => {
    updateFunction();
    document.title = cat + "- NewsSeven";
  }, []);

  let fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${cat}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${
      props.pageSize
    }`;

    let response = await fetch(url);
    let result = await response.json();
    articlesArr = result.articles.filter((res) => {
      if (res.title && res.urlToImage && res.description) {
        return res;
      }
    });
    setarticles(articles.concat(articlesArr));
    settotalarticles(result.totalResults);
    setpage(page + 1);
  };

  return (
    <>
      <div className="container col-10 d-flex flex-column px-auto">
        <h2 className="text-center m-4">NewsSeven- Top {cat} headlines </h2>
        {/* { loading && <Loader />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={page !== Math.ceil(totalarticles / props.pageSize)}
          loader={<Loader />}
        >
          <div className="container">
            <div className="row gx-4 gy-4">
              {articles.map((item) => (
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
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}
News.propTypes = {
  apikey: propTypes.string,
  setProgress: propTypes.func,
  pageSize: propTypes.number,
  country: propTypes.string,
  cate: propTypes.string,
};
News.defaultProps = {
  pageSize: 10,
  country: "us",
  cate: "General",
};
