import React, { Component } from "react";
import { UserContext } from "./UserContext";

export default class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <div>
            <h1>{context.user.name}</h1>
            <h1>{context.user.email}</h1>
            <button onClick={context.logout}> Logout</button>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
