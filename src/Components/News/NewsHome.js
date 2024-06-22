import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsHome = ({ query, category, mode }) => {
  const [newsArticles, setNewsArticles] = useState([]);

  // Fetch news articles when category or query changes

  useEffect(() => {
    const apiKey = "f677f219eba4cd71d8f7daf8355282a4";
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

  return (
    <div>
      <h2 className="text-center">
        <span className="badge bg-danger">News</span>
      </h2>
      {newsArticles &&
        newsArticles.map((news, index) => {
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
    </div>
  );
};

export default NewsHome;
