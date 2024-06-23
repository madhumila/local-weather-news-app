import React from "react";
// import image from ".../Assets/NewsImage"

const NewsItem = ({ title, description, src, url, mode }) => {
  // Conditionally set the class name based on the mode value
  const cardClassName = !mode
    ? "card bg-dark text-light"
    : "card bg-light text-dark";

  return (
    <div
      className={`${cardClassName} mb-3 d-inline-block my-3 mx-3 px-2 py-2`}
      style={{ width: "300px", height: "500px" }}
    >
      <img
        src={src}
        style={{ height: "200px", objectFit: "cover" }}
        className="card-img-top"
        alt=""
      />
      <div className="card-body d-flex flex-column">
        <div
          className="card-title"
          style={{
            fontSize: "18px",
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
            marginTop: "10px",
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
