import React, { useEffect, useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { getUsers, getComments, getPosts } from "../services/postServices";
import { getToken } from "./Helpers/token";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
  const history = useHistory();

  console.log(token);
  useEffect(() => {
    const jwt = getToken();
    if (jwt) {
      getUsers().then((res) => {
        setUsers(res.data);
      });
      getComments().then((res) => {
        setComments(res.data);
      });
      getPosts().then((res) => {
        setPosts(res);
      });
    } else history.push("/signin");
  }, []);
  return (
    <div>
      <div className="container">
        <h3 className="my-3">Dashboard</h3>
        <div className="row justify-content-around p-5">
          <Link
            to="/posts"
            className="col-3 shadow p-3  bg-white rounded text-dark"
          >
            <i className="fas fa-list-ol fa-3x"></i>
            <p>{posts.length}</p>
            <span>total posts</span>
          </Link>
          <div className="col-3 shadow p-3  bg-white rounded mx-4 text-dark">
            <i className="far fa-comments fa-3x"></i>
            <p>{comments.length}</p>
            <p>total comments</p>
          </div>
          <div className="col-3 shadow p-3  bg-white rounded text-dark">
            <i className="fas fa-user-friends fa-3x"></i>
            <p>{users.length}</p>
            <p>Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
