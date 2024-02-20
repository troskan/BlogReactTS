import React, { useState, useEffect, useContext } from "react";
import LoginView from "../../LoginView/LoginView"; // Ensure correct import path
import AuthenticationContext from "../../../Contexts/AuthenticationContext";
import NavigationContext from "../../../Contexts/NavigationContext";

// Assuming you have a type for BlogPost
type BlogPost = {
  id: number;
  title: string;
  content: string;
  datePosted: Date;
};

const ControlPanelView: React.FC = () => {
  const { isLoggedIn } = useContext(AuthenticationContext);
  const { setIsLoggedIn } = useContext(AuthenticationContext);
  const { setCurrentNavigation } = useContext(NavigationContext);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setIsLoading(true);
      console.log("Fetching blog posts..."); // Log before fetch
      try {
        const response = await fetch(
          "https://blog-backend-dmn0.onrender.com/api/Post"
        );
        console.log("Fetch complete, response received:", response); // Log fetch response
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data: BlogPost[] = await response.json();
        console.log("Data set with:", data); // Log the data
        setBlogPosts(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    // setIsLoggedIn(true);
    if (isLoggedIn) {
      fetchBlogPosts();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <LoginView />;
  }
  const handleViewClick = (navigation: string) => {
    setCurrentNavigation(navigation);
  };

  return (
    <div className="pt-5">
      <div className="pt-3 pb-3 border shadow">
        <h1>Control Panel</h1>
        {/* <div className="button-row text-start ms-5">
          <button className="btn btn-outline-dark rounded-0">
            Manage Blog
          </button>
          <button className="btn btn-outline-dark rounded-0">
            Manage Portfolio
          </button>
          <button className="btn btn-outline-dark rounded-0">
            Manage About Me
          </button>
        </div> */}
        <div className="button-row text-start ms-5 mt-2">
          <button className="btn btn-success rounded-0">Create Post</button>
        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table className="table table-striped text-start">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Date Posted</th>
                <th>Edit</th>
                {/* Add more column headers here if needed */}
              </tr>
            </thead>
            <tbody className="text-start">
              {blogPosts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{new Date(post.datePosted).toLocaleDateString()}</td>
                  <td>
                    <button
                      onClick={() => handleViewClick("viewpost")}
                      className="btn btn-primary rounded-0"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ControlPanelView;
