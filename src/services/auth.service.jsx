import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";


//sends a POST request to the '/signup' endpoint with the user's registration information
const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

//sends a POST request to the '/signin' endpoint with the user's login credentials
const login = (username, password) => {
  return axios.post(API_URL + "signin", {
      username,
      password,
    })
    //If the server responds with an access token, the function saves the user object to local storage
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

  //removes the user object from local storage.
  const logout = () => {
    localStorage.removeItem("user");
  };

const authService = {
  register,
  login,
  logout,
};

export default authService;
