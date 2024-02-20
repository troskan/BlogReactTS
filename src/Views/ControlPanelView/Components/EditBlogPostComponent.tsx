import React, { useState, useEffect } from "react";
import axios from "axios";

function EditBlogPostComponent({ postId }) {
  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios
      .get(`https://blog-backend-dmn0.onrender.com/api/post/${postId}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error("Error fetching post", error));
  }, [postId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleEdit = () => {
    axios
      .put(`/api/posts/${postId}`, post)
      .then((response) => {
        console.log("Post updated");
        setIsEditing(false);
      })
      .catch((error) => console.error("Error updating post", error));
  };

  const handleImageUrlsChange = (index, value) => {
    const updatedImageUrls = [...post.ImageUrls];
    updatedImageUrls[index] = value;
    setPost({ ...post, ImageUrls: updatedImageUrls });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      axios
        .delete(`/api/posts/${postId}`)
        .then((response) => {
          console.log("Post deleted");
          // Redirect or update UI as needed
        })
        .catch((error) => console.error("Error deleting post", error));
    }
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit Post</h1>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="Title"
            value={post.title}
            onChange={handleChange}
          />
          <textarea
            name="Content"
            value={post.content}
            onChange={handleChange}
          />
          <input
            type="text"
            name="UserName"
            value={post.UserName}
            onChange={handleChange}
          />
          {/* Add inputs for other editable fields here */}
          {post.ImageUrls.map((url, index) => (
            <input
              key={index}
              type="text"
              value={url}
              onChange={(e) => handleImageUrlsChange(index, e.target.value)}
            />
          ))}
          <button onClick={handleEdit}>Save Changes</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
          {/* Display other fields here */}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default EditBlogPostComponent;
