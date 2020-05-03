import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="container">
        <h3 className="my-3">Dashboard</h3>
        <div className="row justify-content-around p-5">
          <div className="col-3 shadow p-3  bg-white rounded">
            <i className="fas fa-list-ol fa-3x"></i>
            <p>100</p>
            <span>total post</span>
          </div>
          <div className="col-3 shadow p-3  bg-white rounded mx-4">
            <i className="far fa-comments fa-3x"></i>
            <p>123</p>
            <p>total comments</p>
          </div>
          <div className="col-3 shadow p-3  bg-white rounded">
            <i className="fas fa-user-friends fa-3x"></i>
            <p>2</p>
            <p>Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
