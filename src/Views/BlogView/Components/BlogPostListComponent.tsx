import React from "react";
import { useEffect, useState } from "react";
function BlogPostListComponent() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://blogweb.azurewebsites.net/api/Post")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
        setIsLoading(false);
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="container mt-4">
      {[...posts].reverse().map((post) => (
        <div className="row">
          <div className="col-12">
            <header className="mb-4">
              <h1>{post.title}</h1>
            </header>
            <div className="embed-responsive embed-responsive-16by9 mb-4">
              <iframe
                className="embed-responsive-item"
                src={post.yotubeUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <p className="text-muted">
              Posted by: {post.userName}, Posted on: {post.datePostedFormatted}
            </p>
            <p>{post.categoryName}</p>
            {/* Image placeholders */}
            <div className="row">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="col-md-4 col-12 mb-4">
                  <img
                    src={`path_to_image_${index + 1}`}
                    className="img-fluid"
                    alt={`Blog post image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPostListComponent;
