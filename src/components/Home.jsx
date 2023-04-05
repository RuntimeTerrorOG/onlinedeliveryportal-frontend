import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  // 'useEffect' hook to fetch public content from the server when the component mounts
  useEffect(() => {

    // Call the 'getPublicContent' method from the 'UserService' module
    UserService.getPublicContent()

      // If successful, update the 'content' state variable with the response data
      .then((response) => {
        setContent(response.data);
      })
      // If fails, update the 'content' state variable with the error message
      .catch((error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      });
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default Home;
