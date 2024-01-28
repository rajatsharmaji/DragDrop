import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      username: "",
      password: ""
    };
    // Bind the onSubmit method to the current instance of the component
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async onSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const url = "http://localhost:3001/user/get";

    try {
      const response = await axios.get(url, {
        params: {
          email: this.state.username,
          password: this.state.password
        },
        timeout: 5000
      });
      console.log("Success!", response.data);
      this.setState({ data: response.data });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });

    
  }

  render() {
    return (
      <div className="container login-container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-8 col-10">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center">Login</h3>
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
