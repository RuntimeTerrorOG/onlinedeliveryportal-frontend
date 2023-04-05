import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

const BoardDeliveryPerson = () => {
  const [content, setContent] = useState("");

  // Use the 'useEffect' hook to fetch admin content from the server when the component mounts
  useEffect(() => {
    // Call the 'getDeliveryPersonBoard' method from the 'UserService' module
    UserService.getDeliveryPersonBoard().then(

      // If successful, update the state with the response data
      (response) => {
        setContent(response.data);
      },
      // If fails, update the state with the error message
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        setContent(_content);
  
        // If the error status code is 401 (unauthorized), dispatch an event to logout the user
        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);
  

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default BoardDeliveryPerson;
