import axios from "axios";

const getBlogPosts = () => {
  return axios
    .get("https://blog-backend-dmn0.onrender.com/api/Post")
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};

export default getBlogPosts;
