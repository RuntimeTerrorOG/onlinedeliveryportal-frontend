import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);


  //check whether a user is authenticated or not, if not redirect to 'login' page
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  
  return (
    <div className="container">
      <header className="jumbotron">
        <h2>
          <strong className="usernamedisplay">{currentUser.username}</strong> <h3>Profile</h3>
        </h2>
      </header>
      <ul>
      <li><p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p></li>
      <br></br>

      <li><p>
        <strong>Id:</strong> {currentUser.id}
      </p></li>
      <br></br>

      <li><p>
        <strong>Email:</strong> {currentUser.email}
      </p></li>
      <br></br>

      <li><strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul></li>
      </ul>
    </div>
  );
};

export default Profile;
