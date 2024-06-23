import React from "react";
import { useSelector } from "react-redux";
// import image from ".../Assets/NewsImage"

const NewsItem = ({ title, description, src, url }) => {
  // Conditionally set the class name based on the mode value
 
    const darkMode = useSelector((state) => state.mode.isDarkMode) 
    const cardClassName = darkMode
    ? "card bg-dark text-light"
    : "card bg-light text-dark";


  return (
    <div
      className={`${cardClassName} mb-3 d-inline-block my-3 mx-3 px-2 py-2`}
      style={{ width: "250px", height: "400px" }}
    >
      <img
        src={src}
        style={{ height: "150px", objectFit: "cover" }}
        className="card-img-top"
        alt=""
      />
      <div className="card-body mb-0 d-flex flex-column justify-content-space-between " style={{height: "auto"}}>
        <div
          className="card-title"
          style={{
            fontSize: "15px",
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
            fontSize: "12px",
            maxHeight: "70px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description ? description.slice(0, 50) + "..." : title}
        </p>
        <a href={url} className="btn btn-primary mt-auto">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
