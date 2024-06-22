import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsHome = ({ query }) => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("general");

  useEffect(() => {
    const apiKey = "685d4c80a7ae304829310636b66b27a9";
    const url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=ml&country=in&max=30&apikey=${apiKey}`;

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
  }, []);

  return (
    <div>
      <h2 className="text-center">
        <span className="badge bg-danger">News</span>
      </h2>
      {newsArticles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.image}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsHome;
