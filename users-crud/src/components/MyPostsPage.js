import React from "react";
import { Link } from "react-router-dom";

const MyPostsPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-between py-4">
        <span>All Posts</span>
        <div>
          <Link to="/newpost">
            <button className="btn btn-dark">New Post</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPostsPage;
