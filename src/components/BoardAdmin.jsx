import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

const BoardAdmin = () => {
  const [content, setContent] = useState("");

   // Use the 'useEffect' hook to fetch admin content from the server when the component mounts
   useEffect(() => {

    // Call the 'getAdminBoard' method from the 'UserService' module
    UserService.getAdminBoard()

      // If successful, update the 'content' state variable with the response data
      .then((response) => {
        setContent(response.data);
      })
      // If fails, update the 'content' state variable with the error message
      .catch((error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        // dispatch a 'logout' event if the status code is 401
        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
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

export default BoardAdmin;
