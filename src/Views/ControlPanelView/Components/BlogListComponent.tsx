import React from "react";

// Assuming you have a type for BlogPost
type BlogPost = {
  id: number;
  title: string;
  content: string;
  datePosted: Date;
};

type Props = {
  blogPosts: BlogPost[];
};

const BlogListComponent: React.FC<Props> = ({ blogPosts }) => {
  if (!blogPosts || blogPosts.length === 0) {
    return <div className="container">No blog posts available.</div>;
  }

  return (
    <div className="container">
      {blogPosts.map((post) => (
        <div key={post.id} className="row mb-4">
          <div className="col-12">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>
              Posted on: {new Date(post.datePosted).toLocaleDateString()}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogListComponent;
