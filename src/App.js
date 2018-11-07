import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Toggle from "./Toggle";
import { Card } from "./Elements/Card";
//import "./styles.css";
import Modal from "./Elements/Modal";
import Header from "./Header";
import { UserProvider } from "./UserProvider";
import User from "./User";
//accepts a value prop .  that value is the data that you are going to use
// const UserContext = React.createContext();
import { Transition } from "react-spring";
//wrap whole app bc use this information in header bar etc.
function App() {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <User />
        <section>
          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <button onClick={toggle}>Show/Hide </button>
                <Transition
                  items={on}
                  from={{ opacity: 0, bg: "#82d8d8", height: "0px" }}
                  enter={{ opacity: 1, bg: "#524762", height: "200px" }}
                  leave={{ opacity: 0, bg: "#82d8d8", height: "0px" }}
                >
                  {on => on && (styles => <Header style={styles} />)}
                </Transition>
              </Fragment>
            )}
          </Toggle>
        </section>
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Login</button>
              <Modal on={on} toggle={toggle}>
                <h1> What's Fresh Captain? </h1>
              </Modal>
            </Fragment>
          )}
        </Toggle>
      </div>
    </UserProvider>
  );
}

{
  /* <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
  {on && Header}
</Transition>; */
}

export default App;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
