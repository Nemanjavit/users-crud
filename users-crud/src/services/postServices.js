import axios from "axios";

const headers = {
  // Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
  "x-api-key": "B1tD3V",
};

export const searchUser = (userId) => {
  return axios
    .get(`https://crud-api.hypetech.xyz/v1/users/${userId}`, {
      headers: headers,
    })
    .then((res) => res.data);
};
export const signIn = (values) => {
  return axios.post(`https://blog-api.hypetech.xyz/v1/auth/login`, values, {
    headers: headers,
  });
};
export const getUsers = () => {
  return axios.get("https://crud-api.hypetech.xyz/v1/users", {
    headers: headers,
  });
};

// Post related api calls

export const getPosts = () => {
  return axios
    .get("https://blog-api.hypetech.xyz/v1/posts", { headers: headers })
    .then((res) => res.data);
};

export const getComments = () => {
  return axios.get("https://crud-api.hypetech.xyz/v1/comments", {
    headers: headers,
  });
};
