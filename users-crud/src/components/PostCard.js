import React, { useEffect, useState } from "react";
import { searchUser } from "../services/postServices";

const PostCard = (props) => {
  const { post, imgUrl } = props;
  const [name, setName] = useState({ first: "", last: "" });

  useEffect(() => {
    searchUser(post.userId).then((res) => {
      console.log(res.name);
      setName({ first: res.name.first, last: res.name.last });
    });
  }, [post.userId]);

  return (
    <div className="card m-3 col-3 p-0">
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
      </div>
      <div className="card-footer">
        <p className="card-text">
          <small className="text-muted">
            Author name:{name.first}
            {name.last}
          </small>
        </p>
      </div>
    </div>
  );
};

export default PostCard;
