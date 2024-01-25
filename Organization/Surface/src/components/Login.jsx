import React from "react";


class Login extends React.Component{
  render(){
      return(
        <div className="container login-container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-8 col-10">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center">Login</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter your username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Login;