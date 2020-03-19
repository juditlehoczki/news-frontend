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
    return (
      <>
        {userLoggedIn ? (
          <div>
            Logged In: {userLoggedIn} <br />
            <button onClick={this.logOut}>(Not You?)</button>
          </div>
        ) : (
          <div>
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
          </div>
        )}
      </>
    );
  }
}

export default Login;
