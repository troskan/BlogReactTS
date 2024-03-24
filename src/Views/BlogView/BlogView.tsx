import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogPostItemComponent from "./Components/BlogPostItemComponent";
import BlogPostListComponent from "./Components/BlogPostListComponent";
import LoadingComponent from "../UniversalComponents/LoadingComponent"; // Import LoadingComponent
import "./BlogViewResponse.css";

interface Post {
  categoryID: number;
  categoryName: string;
  content: string;
  datePosted: string;
  datePostedFormatted: string;
  imageUrls: string[];
  postID: number;
  roleName: string;
  title: string;
  userID: number;
  userName: string;
  youtubeUrl: string;
}

const getBlogPosts = () => {
  return axios
    .get("https://blog-backend-dmn0.onrender.com/api/Post")
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};

function BlogView() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  useEffect(() => {
    getBlogPosts()
      .then((data) => {
        setPosts(data);
        setIsLoading(false); // Set isLoading to false when data is fetched
        console.log(data);
      })
      .catch((error) => {
        setIsLoading(false); // Set isLoading to false on error as well
        console.error(error);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingComponent /> // Show LoadingComponent when isLoading is true
      ) : (
        <div>
          <div id="top" className="d-flex justify-content-center flex-wrap">
            {posts.map((post, index) => (
              <a className="remove-link" href={"#" + post.postID.toString()}>
                <BlogPostItemComponent
                  key={index}
                  header={post.title}
                  date={post.datePostedFormatted}
                  urls={post.imageUrls}
                  href={post.postID.toString()}
                />
              </a>
            ))}
          </div>
          <BlogPostListComponent />
        </div>
      )}
      <footer>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}

export default BlogView;
