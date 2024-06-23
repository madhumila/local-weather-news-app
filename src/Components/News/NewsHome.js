import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import ReactPaginate from "react-paginate";
import "./NewsHome.css";

const NewsHome = ({ query, category, mode }) => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [currentPages, setCurrentPages] = useState(0);
  const itemsPerPage = 6;

  // Fetch news articles when category or query changes

  useEffect(() => {
    const apiKey = "101f1a09f1b3c0ab1a1388e8b23e83a6";
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=ml&country=in&max=30&apikey=${apiKey}&q=${query}`;

    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setNewsArticles(data.articles);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchNews();
  }, [category, query]);

  const paginatedData = newsArticles.slice(
    currentPages * itemsPerPage,
    (currentPages + 1) * itemsPerPage
  );

  const handlePageClick = ({ selected }) => {
    console.log("Page clicked:", selected);
    setCurrentPages(selected);
  };

  return (
    <div>
      <h2 className="text-center">
        <span className="badge bg-danger" style={{ marginTop: "20px" }}>
          News
        </span>
      </h2>
      {paginatedData &&
        paginatedData.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.image}
              url={news.url}
              mode={mode}
            />
          );
        })}
      <ReactPaginate
        pageCount={Math.ceil(newsArticles.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default NewsHome;
