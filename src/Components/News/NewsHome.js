import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import "./NewsHome.css";

const NewsHome = ({ query, category, mode }) => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [currentPages, setCurrentPages] = useState(0);
  const [isSortedDescending, setIsSortedDescending] = useState(false);
  const itemsPerPage = 6;
  const selectedLanguage =
    useSelector((state) => state.app.newsLanguage) || "ml";

  const darkMode = useSelector((state) => state.app.isDarkMode);

  // Fetch news articles when category or query changes
  useEffect(() => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${selectedLanguage}&max=30&apikey=${apiKey}&q=${query}`;

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
  }, [category, query, selectedLanguage]);

  // Function to handle sorting
  const handleSort = () => {
    const sortedArticles = [...newsArticles].sort((a, b) => {
      return isSortedDescending
        ? new Date(b.publishedAt) - new Date(a.publishedAt)
        : new Date(a.publishedAt) - new Date(b.publishedAt);
    });
    setNewsArticles(sortedArticles);
    setIsSortedDescending(!isSortedDescending);
  };

  const paginatedData =
    newsArticles &&
    newsArticles.slice(
      currentPages * itemsPerPage,
      (currentPages + 1) * itemsPerPage
    );

  const handlePageClick = ({ selected }) => {
    setCurrentPages(selected);
  };

  return (
    <div>
      <div className="sub-header">
        <button
          onClick={handleSort}
          className="sort-button"
          style={{ marginTop: "15px", color: darkMode ? "#fff" : "#000" }}
        >
          Sort By Date
          {isSortedDescending ? (
            <i class="bi bi-sort-up"></i>
          ) : (
            <i class="bi bi-sort-down"></i>
          )}
        </button>
        <h2 className="text-center">
          <span className="badge bg-danger" style={{ marginTop: "15px" }}>
            News
          </span>
        </h2>
      </div>

      {paginatedData &&
        paginatedData.map((news, index) => {
          return (
            <NewsItem
              key={index}
              source={news.source.name}
              publishedAt={news.publishedAt}
              title={news.title}
              description={news.description}
              src={news.image}
              url={news.url}
              mode={mode}
            />
          );
        })}
      <ReactPaginate
        pageCount={Math.ceil(
          newsArticles && newsArticles.length / itemsPerPage
        )}
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
