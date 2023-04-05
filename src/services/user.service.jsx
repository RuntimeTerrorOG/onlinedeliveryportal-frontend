import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";


// GET request to the '/all' endpoint, which is accessible to all users
const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

//GET request to the '/user' endpoint, which requires authentication
const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

//GET request to the '/delivery' endpoint, which requires authentication and a delivery person role
const getDeliveryPersonBoard = () => {
  return axios.get(API_URL + "delivery", { headers: authHeader() });
};

//GET request to the '/admin' endpoint, which requires authentication and an admin role
const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const userService = {
  getPublicContent,
  getUserBoard,
  getDeliveryPersonBoard,
  getAdminBoard,
};

export default userService