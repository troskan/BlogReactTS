import { Post } from "../../../Interfaces/interface";
import { useEffect, useState } from "react";

function BlogPostListComponent() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [requestError, setRequestError] = useState<string>("");

  useEffect(() => {
    fetch("https://blogweb.azurewebsites.net/api/Post")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })

      .then((data) => {
        setPosts(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        setRequestError(error.message);
        setIsLoading(false);
        console.error("Error:", error);
      });
  }, []);

  if (isLoading)
    return (
      <div className="d-flex justify-content-center shadow">
        <p>Loading...</p>
      </div>
    );
  if (requestError)
    return (
      <div className="d-flex justify-content-center">
        <p className="bg-warning p-2 rounded">Error: {requestError}</p>
      </div>
    );
  if (posts.length === 0)
    return (
      <div className="d-flex justify-content-center">
        <p>No posts available.</p>
      </div>
    );

  return (
    <div className="container mt-4">
      {[...posts].reverse().map((post: Post) => (
        <div className="row mb-5">
          <div className="col-12">
            <header className="mb-4">
              <h1>{post.title}</h1>
            </header>
            <p className="text-muted">
              Posted by: {post.userName}, Posted on: {post.datePostedFormatted}
            </p>
            <p>{post.categoryName}</p>
            <div className="d-flex justify-content-center">
              <p style={{ maxWidth: "800px" }}>{post.content}</p>
            </div>
            <div className="embed-responsive embed-responsive-16by9 mb-4">
              <iframe
                className="embed-responsive-item"
                src={post.youtubeUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>

            {/* Image placeholders */}
            <div className="row">
              {post.imageUrls.map(
                (
                  type,
                  index // Corrected the map function syntax
                ) => (
                  <div key={index} className="col-md-4 col-12 mb-4">
                    <img
                      src={type}
                      className="img-fluid"
                      alt={`Blog post image ${index + 1}`}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPostListComponent;
