import React from "react";

class SignUp extends React.Component{
    render(){
        return(
            <div className="container registration-container">
            <div className="row justify-content-center">
              <div className="col-md-6 col-sm-8 col-10">
                <div className="card">
                  <div className="card-header">
                    <h3 className="text-center">Register</h3>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                      </div>
                      <button type="submit" className="btn btn-primary btn-block">Register</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>      
        )
    }
}

export default SignUp