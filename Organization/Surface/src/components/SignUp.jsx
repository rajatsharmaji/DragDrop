import React from "react";
import axios from "axios"; // Import axios for making HTTP requests

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      name: "",
      email: "",
      password: "",
    };
    // Bind the onSubmit method to the current instance of the component
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async onSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const url = "http://localhost:3001/user/add";

    try {
      const response = await axios.post(url, {
        name: this.state.name,
        email: this.state.email, // Changed from username to email
        password: this.state.password,
      });
      console.log("Success!", response.data);
      this.setState({ data: response.data });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    return (
      <div className="container registration-container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-8 col-10">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center">Register</h3>
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={this.state.email}
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
                    Register
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

export default SignUp;
