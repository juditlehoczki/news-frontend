import React, { Component } from "react";

class Login extends Component {
  state = {
    username: ""
  };

  handleChange = e => {
    this.setState({ username: e.target.value });
  };

  logIn = e => {
    e.preventDefault();
    this.props.setUserLoggedIn(this.state.username);
    this.setState({ username: "" });
  };

  logOut = () => {
    this.props.setUserLoggedIn("");
  };

  render() {
    const { userLoggedIn } = this.props;
    if (userLoggedIn) {
      return (
        <span>
          Welcome {userLoggedIn}.<br />
          <button onClick={this.logOut}>(Not You?)</button>
        </span>
      );
    } else {
      return (
        <span>
          <form onSubmit={this.logIn}>
            <label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <br />
              <button>Log In</button>
            </label>
          </form>
        </span>
      );
    }
  }
}

export default Login;
