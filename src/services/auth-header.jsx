//returns an object with an Authorization header

export default function authHeader() {

  //JSON.parse convert the access token from a JSON string to a JavaScript object
 const user = JSON.parse(localStorage.getItem("user"));

 //checks that the user object exists and has an accessToken
 if (user && user.accessToken) {
 
    return { Authorization: "Bearer " + user.accessToken };
 }
 }
