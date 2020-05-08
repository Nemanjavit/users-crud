import React, { useEffect, useState } from "react";
import { getPosts, searchUser } from "../services/postServices";
import PostCard from "./PostCard";
import { v4 as uuidv4 } from "uuid";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, []);

  return (
    <div className="container">
      <div className="py-5">
        <div className="row row-cols-3 justify-content-center">
          {posts.map((post) => (
            <PostCard
              key={uuidv4()}
              post={post}
              imgUrl={`https://loremflickr.com/g/480/640/laptop?random=${Math.floor(
                Math.random() * 101
              )}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
