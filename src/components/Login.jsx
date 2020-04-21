import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
  };

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  };

  logIn = (e) => {
    const { username } = this.state;
    const { setUserLoggedIn } = this.props;
    e.preventDefault();
    setUserLoggedIn(username);
    this.setState({ username: "" });
  };

  logOut = () => {
    this.props.setUserLoggedIn("");
  };

  render() {
    const { username } = this.state;
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
            <label className="label">
              Log in as 'jessjelly' to test this site.
              <br />
              <input
                type="text"
                value={username}
                onChange={this.handleChange}
              />
              <button>Log Me In</button>
            </label>
          </form>
        </span>
      );
    }
  }
}

export default Login;
