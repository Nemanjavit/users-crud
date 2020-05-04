import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  "x-api-key": "B1tD3V",
};
export const getPosts = () => {
  return axios
    .get("https://blog-api.hypetech.xyz/v1/posts", { headers: headers })
    .then((res) => res.data);
};
export const searchUser = (userId) => {
  return axios
    .get(`https://crud-api.hypetech.xyz/v1/users/${userId}`, {
      headers: headers,
    })
    .then((res) => res.data);
};
