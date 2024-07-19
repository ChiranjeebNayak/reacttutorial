import React from "react";
import Login from "./Login";
import Home from "./home";
function conditional() {
  const isUserLoggedIn = true;
  // logic 
  return (
    <div>
      {isUserLoggedIn ? <Home /> : <Login />}
    </div>
  );
}

export default conditional;
