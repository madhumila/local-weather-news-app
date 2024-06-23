import React from "react";
import { useSelector } from "react-redux";
import NewsImage from "./../../Assets/NewsImage.png";
import "./NewsItems.css";

const NewsItem = ({ title, description, src, url }) => {
  // Conditionally set the class name based on the mode value

  const darkMode = useSelector((state) => state.mode.isDarkMode);
  const cardClassName = darkMode
    ? "card bg-dark text-light"
    : "card bg-light text-dark";

  return (
    <div
      className={`${cardClassName} mb-3 d-inline-block my-3 mx-3 px-2 py-2 news-card`}
      style={{
        width: "250px",
        height: "400px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <img
        src={src ? src : NewsImage}
        style={{ height: "150px", objectFit: "cover" }}
        className="card-img-top"
        alt=""
      />
      <div className="card-body d-flex flex-column" style={{ height: "60%" }}>
        <div
          className="card-title"
          style={{
            fontSize: "14px",
            fontFamily: "Noto Sans Malayalam",
            fontWeight: 700,
            flex: "0 0 auto",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title.slice(0, 50) + "..."}
        </div>
        <p
          className="card-text flex-grow-1"
          style={{
            fontSize: "10px",
            fontFamily: "Noto Sans Malayalam",
            fontWeight: 400,
            maxHeight: "70px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description ? description.slice(0, 90) + "..." : title}
        </p>
        <a
          href={url}
          className="btn btn-primary mt-auto"
          style={{ marginTop: "auto" }}
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
