import React from "react";
import UsersList from "../containers/users-list";
import UserDetai from "../containers/user-detail";
//require("../../scss/styles.scss");

const App = () => {
  return (
    <div>
      <h2>Username List</h2>
      <UsersList />
      <hr />
      <h2>UserDetails</h2>
      <UserDetai />
    </div>
  );
};

export default App;
