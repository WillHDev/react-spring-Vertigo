import React, { Component, Fragment } from "react";

import { UserContext } from "./UserContext";

export class UserProvider extends Component {
  state = {
    id: "123",
    name: "Will",
    email: "Will@levelup.com"
  };

  logout = () => {
    this.setState({
      id: null,
      name: "",
      email: ""
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
          logout: this.logout
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
