// Import React and CSS styles
import React from "react";
import "./BlogItem.css";
import { formatDistanceToNow } from "date-fns";

// Define the props interface
interface BlogPostItemProps {
  header: string;
  date: string;
  urls: string[];
}

// Refactor the component to use props
const BlogPostItemComponent: React.FC<BlogPostItemProps> = (props) => {
  const { header, date, urls } = props; // Destructuring props for easier access

  // Styles
  const customStyle = {
    width: "200px",
    height: "220px",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const imageStyle = {
    height: "50px",
    width: "50px",
  };

  // JSX structure
  return (
    <div className="d-flex flex-grow-0 flex-column m-2">
      <div
        className="rounded-3 box border shadow hover pb-2"
        style={customStyle}
      >
        <div>
          <div className="opacity-75">
            {formatDistanceToNow(new Date(date), {
              addSuffix: true,
            })}
          </div>
          <div className="ms-1 me-1">{header}</div>
        </div>
        <div>
          {urls.slice(0, 6).map((url, index) => (
            <img
              className="rounded-1 m-1 shadow"
              key={index} // Providing a unique key for each image
              src={url}
              alt={`Gallery image ${index + 1}`}
              style={imageStyle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostItemComponent;
